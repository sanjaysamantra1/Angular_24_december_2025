import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { UserInformationService } from '../services/user-information-service';

export const trainerGuard: CanActivateFn = (route, state) => {

  const userInformationService = inject(UserInformationService);

  if (userInformationService.userRole == 'trainer') {
    return true;
  } else {
    alert('You dont have acces to this page')
    return false;
  }
};
