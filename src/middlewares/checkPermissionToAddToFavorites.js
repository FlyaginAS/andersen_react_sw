import storageService from '../services/storage-service';

const checkPermissionToAddToFavorites =
  (store) => (next) => (action) => {
    if (action.type === 'authorization/addFavorites') {
      //todo переписать условие через &
      if (store.getState().authorization.user) {
        if (
          store
            .getState()
            .authorization.user.favorites.includes(action.payload)
        ) {
          alert('Персонаж уже был добавлен в избранное');
          return;
        }
        next(action);
        //сохраняем в стор обновленного юзера. Это побочное
        //действие можно выполнять или тут, или в компоненте,
        // но не в редюсере- он чистая ф-ия
        const user = store.getState().authorization.user;
        storageService.setToStorage(user.login, user);
        alert('Персонаж добавлен');
      } else {
        alert(
          'Только зарегистрированные пользователи могут добавлять в избранное'
        );
      }
    } else {
      next(action);
    }
  };

export default checkPermissionToAddToFavorites;
