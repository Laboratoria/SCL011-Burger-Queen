//vinculación firebase proyecto en react
// Your web app's Firebase configuration
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/database';

firebase.initializeApp({
    apiKey: "AIzaSyCpuc6-MvRaAFH9IMV5Kno3AprOJBc3jdg",
    authDomain: "burger-6d85a.firebaseapp.com",
    databaseURL: "https://burger-6d85a.firebaseio.com",
    projectId: "burger-6d85a",
    storageBucket: "burger-6d85a.appspot.com",
    messagingSenderId: "218474835632",
    appId: "1:218474835632:web:f05560eae7ce4b1f32d575"
  })
  let db = firebase.firestore();
  export default db
/*class FileUpload extends React.Component {
    render () {
        return (
            <div>
                <progress value={this.state.uploadValue}
            </div>


        )
    }
}

ReactDOM.render(<FileUpload />, document.getElementById('root'))*/
