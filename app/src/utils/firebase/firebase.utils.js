/*  Development DB  */
import { InitFBDB } from './InitFBDB.utils.js';
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
  signInWithRedirect,
} from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';
// Initialize Firebase Object with our Firebase App Instance specified in config
// eslint-disable-next-line
const app = InitFBDB;
// Create Google Auth Store instance.
const provider = new GoogleAuthProvider();
// Select Google Auth Store 'prompt' (there's several)
provider.setCustomParameters({ prompt: 'select_account' });
// export instantiated Google Auth Store objects.
export const auth = getAuth();
export const signInWithGooglePopup = () => {signInWithPopup(auth, provider)};
export const signInWithGoogleRedirect = () => {signInWithRedirect(auth, provider)};
// store google firestore database instance in object
export const db = getFirestore();
export const createUserAuthDoc = async (userAuth, additionalInformation={}) => {
  if (!userAuth) return;
  // doc() args == db-instance, collection-name, doc-uid
  const userDocRef = doc(db, 'users', userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);
  // check if user exists in sys
  if (!userSnapshot.exists()) {
    // store fields from auth request >> store timestamp
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    // write User's doc reference to their doc model
    try {
      await setDoc(userDocRef, { displayName, email, createdAt, ...additionalInformation });
    } catch (error) {
      console.log(`error creating the user, ${error.message}`);
    }
  }
  return( userDocRef );
};
export const createUserBasicAuth = async (email, password) => {
  if (!email || !password) { return };
  return await createUserWithEmailAndPassword(auth, email, password);
};
export const signInUserBasicAuth = async (email, password) => {
  if (!email || !password) { return };
  return await signInWithEmailAndPassword(auth, email, password);
};
