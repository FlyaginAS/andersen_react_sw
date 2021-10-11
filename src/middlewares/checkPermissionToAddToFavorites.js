import storageService from '../services/storage-service';

const checkPermissionToAddToFavorites =
  (store) => (next) => (action) => {
    if (action.type !== 'authorization/addFavorites') {
      return next(action);
    }

    let user = store.getState().authorization.user;

    if (!user) {
      return alert(
        'Только зарегистрированные пользователи могут добавлять в избранное'
      );
    }

    if (user.favorites.includes(action.payload)) {
      return alert('Персонаж уже был добавлен в избранное');
    }

    next(action);
    //сохраняем в стор обновленного юзера. Это побочное
    //действие можно выполнять или тут, или в компоненте,
    // но не в редюсере- он чистая ф-ия

    //получаем обновленного юзера
    user = store.getState().authorization.user;
    storageService.setToStorage(user.login, user);
    alert('Персонаж добавлен');
  };

export default checkPermissionToAddToFavorites;
