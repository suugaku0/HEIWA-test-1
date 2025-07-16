// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD6FqAgmcwjOQQFmpu_QgJ8YZJBaECgtz8",
  authDomain: "serverofheiwa.firebaseapp.com",
  projectId: "serverofheiwa",
  storageBucket: "serverofheiwa.firebasestorage.app",
  messagingSenderId: "66883464111",
  appId: "1:66883464111:web:88c2b67fdf7f3aeb489d5a"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Initialize Firebase

submitbutton.addEventListener("click",async(e)=>{
    e.preventDefault();
    const datavalue = document.getElementById("data").value
    if(datavalue.trim() === "")return;
    try {
        await db.collection("mycollection").add({
            text:datavalue,
            timestanp:firebase.firestore.FieldValue.serverTimestamp(),
            score:firebase.firestore.FieldValue.increment(0)
        })
        document.getElementById('dataInput').value = ''
        console.log("sucsess")
    } catch(e){
        console.log("not sucsess")
    }
    location.href = "mainPage.html";
})
