import { shallowMount, createLocalVue } from '@vue/test-utils';
import authentication from '../../src/store/modules/authentication.js';
import { cognitouser }  from './settup.js';

  test("Set authentication to true", () =>{

    authentication.mutations.SET_AUTHENTICATED(authentication.state, true);
    expect (authentication.state.IsAuthenticated).toBeTruthy();

  });



  test("Set authentication to false", () =>{

    authentication.mutations.SET_AUTHENTICATED(authentication.state, false);
    expect (authentication.state.IsAuthenticated).toBeFalsy;

  });

  test("Check the default user is null", () =>{

    expect (authentication.state.authenticatedUser).toBeNull();
  });


  test("Set the logged in user", () =>{

    authentication.mutations.SET_USER(authentication.state, cognitouser);
    expect (authentication.state.authenticatedUser.username).toEqual("Ali");
    expect (authentication.state.authenticatedUser.attributes.sub).toEqual("0273a9c5-a12c-4fc5-be2e-f2e8817e6e5d");
  });
