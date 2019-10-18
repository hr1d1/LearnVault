
// DynCourseList
//const e_mail = eMail;
//.where('Members','array-contains', firebase.auth().currentUser.email)
db.collection('Courses').get().then(snapshot =>{
 //console.log(eMail);
  showCourse(snapshot.docs);
})

const coureList = document.querySelector('.table-courses-tbody');
const showCourse = (data) =>{

  let html ='';

  data.forEach(doc =>{
    const course = doc.data();
  //  `${course.title}`
    // `` = template string
    if(`${course.Members}`.includes( firebase.auth().currentUser.email))
    {
    const tr= `
    <tr>
        <td class="credit-col">${course.CreditHr}</td>
        <td class="course-title-col">${course.Title}</td>
        <td class="course-code-col">${course.Code}</td>
    </tr>

    `;

    html += tr
    }

  });

  coureList.innerHTML = html;

}
