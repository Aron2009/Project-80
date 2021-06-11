names_array=[];
function submit(){
    var displayname_array=[];
    for(var j=1; j<=4;j++){
        var name_student=document.getElementById("name_of_the_student_"+j).value;
names_array.push(name_student);
    }
    for(var k=0; k<names_array.length;k++){
        displayname_array.push("<h4> Name -"+names_array[k]+"</h4>");
    }
    document.getElementById("display_name_with_commas").innerHTML=displayname_array;
    var remove_comma=displayname_array.join(" ");
    document.getElementById("display_name_without_commas").innerHTML=remove_comma;
    document.getElementById("submit_button").style.display="none";
    document.getElementById("sort_button").style.display="inline-block";
}
function sorting(){
    names_array.sort();
    var display_sortarray=[];
    for(var k=0; k<names_array.length;k++){
        display_sortarray.push("<h4> Name -"+names_array[k]+"</h4>");
    }
    var remove_comma=display_sortarray.join(" ");
    document.getElementById("display_name_without_commas").innerHTML=remove_comma;
}