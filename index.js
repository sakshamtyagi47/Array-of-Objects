// ARRAY OF OBJECT

let studentRecords = [ {name: 'John', id: 123, marks : 98 },
          {name: 'Baba', id: 101, marks : 23 },
          {name: 'yaga', id: 200, marks : 45 },
          {name: 'Wick', id: 115, marks : 75 } ] ;


 // "Question 1 : We are interested in retrieving only the name of the students and all the names should be in caps."

 let arr1 = studentRecords.map(x => x.name.toUpperCase());
 console.log(arr1);



// Q2-Suppose we have the same dataset as above but this time we want to get the details of students who scored more than 50 marks.
let arr2 = studentRecords.filter(mark => mark.marks >50);
console.log(arr2);



 //   Question 3: Retrieve the details of students who scored more than 50 marks and have id greater than 120.

 let arr3 = studentRecords.filter(stdt => stdt.marks >50 && stdt.id > 120);
 console.log(arr3);


 //   Question 4: Consider the same scenario we have discussed above, but this time we would like to know the sum total of the marks of the students.       

        //   let arr4 = studentRecords1.filter( );

        let arr4 = studentRecords.reduce((a,b) => a+b.marks,0);
        console.log(arr4);


        // Question 5: This time we want to get only the names of the students who 
            // scored more than 50 marks from the same dataset used above.

            let arr5 = studentRecords.filter(mark => mark.marks > 50);

            console.log(arr5.map(a => a.name));


            //Question 6: This time we are required to print the sum of marks of the students with id > 120.


            let arr6 = studentRecords.filter(id => id.id > 120).reduce((acc,cur) => acc+cur.marks,0);
            console.log(arr6);


            //Question 7: This time we are required to print the total marks of the students with marks greater than 50 after a grace of 15 marks has been added to those students who scored less than 50.


            let arr7 = studentRecords.map (function(mark){
                if(mark.marks < 50){
                    mark.marks +=15
                };
                return mark;
    }).filter(mark => mark.marks > 50).reduce((acc,cur) => acc+cur.marks,0);
    console.log(arr7);


     //Question 8: Create 6 objects , each object will have name, class, roll no as properties. 
//Store these objects in an array of objects. 

//Ans.    let studentRecords2 = 
let frd1={ 
    name:"ayush", 
    class: 12,
    rollno : 32 
    } 
    let frd2={ 
    name:"rishu", 
    class: 10, 
    rollno:23 
    } 
    let frd3={ 
    name:"rohan", 
    class:9,
    rollno:45
    } 
    let frd4={ 
    name:"vishal", 
    class:11,
    rollno:56
    } 
    let frd5={ 
    name:"satish", 
    class:8,
    rollno:36 
    } 
    let frd6={ 
    name:"Subham", 
    class:6,
    rollno:21
    } 
    let arr=[{...frd1},{...frd2},{...frd3},{...frd4},{...frd5},{...frd6}]; 
    console.log(arr);