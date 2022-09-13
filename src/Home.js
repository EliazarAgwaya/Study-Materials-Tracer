import React from "react"

function Home (){
    return(
        <div className="home">
            <div className="images">
                <img src="https://t4.ftcdn.net/jpg/03/68/43/81/240_F_368438123_fKmKFy6dvw3PUQ6qA7SqjXHKbWZaiOFD.jpg" alt="study"/>
                <img src="https://img.freepik.com/free-photo/close-up-image-programer-working-his-desk-office_1098-18707.jpg?w=1380&t=st=1663046088~exp=1663046688~hmac=752a216242b7be71e1d269c74b2f5bd3d2ba74410cb9b1323983ad62e67b5912" alt="study"/>
                <img src="https://img.freepik.com/free-photo/flat-lay-business-concept_53876-24738.jpg?w=1380&t=st=1663045943~exp=1663046543~hmac=f3a867991a7810a22ecde5ae8e678f5ea8a6d69d48fe478b6f120252af1ab32b" alt ="study"/>
                <img src="https://img.freepik.com/free-photo/book-laptop-pencil-clock-wooden-table-library-education-learning-concept_1150-16629.jpg?w=1380&t=st=1663045645~exp=1663046245~hmac=19a8ac293ff698f58c2a9f3e7f373528f288138a6dc0a6b09fc2f12676bf49bd" alt="study"/>
                <img src="https://img.freepik.com/free-photo/concept-back-school-teacher-s-day-idea-pens-pencils-books-alarm-clock-laptop-table-against-background-gray-board-back-school-with-copy-space_166373-2804.jpg?w=1380&t=st=1663045343~exp=1663045943~hmac=d0914f345f6a816c5d7a9c8e3598c5c0de3a7acfd574919ed18a6fb6f8562df9" alt="Study materials"/>
            </div>
            <div className="intro">
                <h1 id="tracer">Study Material Tracer</h1>
                <p>Welcome to the study material tracer app! This application enables one to keep track of the study materials one wants to use or have used. It's therefore a home for everyone since learning has no end. There is ability to add the study materials you've used, or
            would like to. You can add comments and also delete them, one can also like the materials based on how
            you liked them!</p>
            <h6 id="feel">Feel free to add your material here, add comments and also delete them at will</h6>
            </div>
        </div>
    )
}

export default Home