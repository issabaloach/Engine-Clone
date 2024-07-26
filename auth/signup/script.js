import {
  auth,
  createUserWithEmailAndPassword,
  doc,
  setDoc,
  db,
  storage,
  ref,
  uploadBytes,
  getDownloadURL,
} from "../../utills/utills.js";


const signup_btn = document.getElementById("signup_form")
const submit_btn = document.getElementById("submit_btn");


signup_btn.addEventListener("submit", function (e)  {
  e.preventDefault();
  console.log(e);
  console.log(e.target);


const firstName = e.target[0].value;
const lastName = e.target[1].value;
const email = e.target[2].value;
const password = e.target[3].value;
const img = e.target[4].files[0];

const userInfo = {
  img,
  email,
  password,
  firstName,
  lastName,
};


createUserWithEmailAndPassword(auth, email, password)
  .then((user) => {
    console.log("user=>", user.user.uid);
    // Upload user image
    const userRef = ref(storage, `user/${user.user.uid}`);
    uploadBytes(userRef, img)
      .then(() => {
        console.log("user image uploaded");
        // Getting URL of the image we just uploaded
        getDownloadURL(userRef)
          .then((url) => {
            console.log("image url", url);

            // Update user info object
            userInfo.img = url;

            // Created user document reference
            const userDbRef = doc(db, "users", user.user.uid);

            // Set this document to DB
            setDoc(userDbRef, userInfo).then(() => {
              console.log("User Object Updated into DB");
              window.location.href = "/";
              submit_btn.disabled = false;
              submit_btn.innerText = "Submit";
            });
          })
          .catch((err) => {
            console.log("url not uploading", err);
            submit_btn.disabled = false;
            submit_btn.innerText = "Submit";
          });
      })
      .catch((err) => {
        console.log("Error in uploading user image", err);
        submit_btn.disabled = false;
        submit_btn.innerText = "Submit";
      });
  })
  .catch((err) => {
    alert(err);
    submit_btn.disabled = false;
    submit_btn.innerText = "Submit";
  });

console.log(userInfo);
})
