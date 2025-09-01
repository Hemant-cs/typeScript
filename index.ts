function test(event: any){
    event.preventDefault();
    //for userName
    const userName = document.getElementById("name") as HTMLInputElement;
    console.log(userName.value);

    //for email
    const userEmail = document.getElementById("email") as HTMLInputElement;
    console.log(typeof userEmail.value);

    //for age
    const userAge = document.getElementById("age") as HTMLInputElement;
    console.log(typeof userAge.value);

    //creating an readOnly array
    var readOnlyArray: ReadonlyArray<string> = ["me", "you", "we"];
    console.log(readOnlyArray);

}