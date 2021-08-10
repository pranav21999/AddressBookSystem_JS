//UC6
class Contact {
  /*
    firstName;
    lastName;
    address;
    city;
    state;
    zip;
    phoneNumber;
    email;*/
    phoneNumber;
   //creating a constructor using var args
    constructor(...params) {
      this.firstName = params[0];
      this.lastName = params[1];
      this.address = params[2];
      this.city = params[3];
      this.state = params[4];
      this.zip = params[5];
      this.phoneNumber = params[6];
      this.email = params[7];
    }
    get firstName() {return this._firstName;}
  set firstName(firstName) {
    let firstNameRegex = RegExp('^[A-Z]{1}[a-z]{1,}$');
    if(firstNameRegex.test(firstName))
      this._firstName =firstName;
      else throw 'Invalid FirstName';
  }

  get lastName() {return this._lastName;}
  set lastName(lastName) {
    let lastNameRegex = RegExp('^[A-Z]{1}[a-z]{1,}$');
    if (lastNameRegex.test(lastName)) 
      this._lastName = lastName;
    else throw 'Invalid LastName '   
    }
      

  get address() {return this._address;}
  set address(address) {
    let addressRegex = RegExp('^[0-9 A-Z]{1}[A-Z a-z 0-9]{1,}$');
    if (addressRegex.test(address))
    this._address = address;
    else throw 'Invalid Address'
  }

  get city() {return this._city;}
  set city(city) {
    let cityRegex = RegExp('^[A-Z]{1}[A-Z a-z]{1,}$');
    if(cityRegex.test(city))
      this._city = city;
    else throw 'Invalid City Name'
  }

  get state() {return this._state;}
  set state(state) {
    let stateRegex = RegExp('^[A-Z]{1}[A-Z a-z]{1,}$');
    if (stateRegex.test(state)) 
      this._state = state;
    else throw 'Invalid State Name'
  }

  get zip() {return this._zip;}
  set zip(zip) {
    let zipRegex = RegExp('^[1-9]{1}[0-9]{2}\\s{0,1}[0-9]{3}$');
    if(zipRegex.test(zip))  
      this._zip = zip;
    else throw 'Invalid Zip'
    }

  get phoneNumber() {return this._phoneNumber;}
  set phoneNumber(phoneNumber) {
    let phoneNumberRegex = RegExp('^[1-9]{2}\\s{0,1}[1-9]{1}[0-9]{9}$');
    if(phoneNumberRegex.test(phoneNumber))
      this._phoneNumber = this.phoneNumber;
    else throw 'Invalid PhoneNumber'
  }

  get email() {return this._email;}
  set email(email) {
    let emailRegex = RegExp('^[A-Z a-z 0-9]+([._+-][0-9 a-z A-Z]+)*@[0-9 a-z A-Z]+.[a-z A-Z]{2,3}([.][a-z A-Z]{2})*$');
    if(emailRegex.test(email))
      this._email = email;
    else throw 'Invalid Email'  
  }
    //using to string to get output in desied manner
      toString() {
         return "FirstName = "+ this.firstName +", LastName = "+this.lastName+", Address = "+this.address+", City ="+this.city+
         ", State = "+this.state+", Zip= "+this.zip+", PhoneNumber="+this.phoneNumber+", Email="+this.email;
      }
  }
  
 /* let contact=new Contact("Pranav","Dani","Akkkkkkkkkk",'MMM','MH','402117','91 7828626888','aaa@gmail.com');
  console.log(contact.toString());
 */
    //UC3-Ability to create new addressbook array and add contact to it
    //creating a new array
    let addressbook = new Array();
    try
    {
      let contact1 = new Contact('Pranav', 'Dani', 'Abc', 'Pune', 'MH', '402107', '91 7799999999', 'mark@gmail.com')
      let contact2 = new Contact('Abc', 'Lu', 'NNNN', 'PPPP', 'MH', '400107', '91 9898989898', 'abc@gmail.com')
      addressbook.push(contact1);
      addressbook.push(contact2);
      addressbook.push(contact)
    }
    catch(e)
    {
      console.error(e);
    }
    console.log("\nAddressbook")
    console.log(addressbook);

    /*UC6-Find person by contact
    creating a function to find contact by name and passing contact as a parameter*/
    function findFirstName(contact)
    {
        return contact.firstName.includes("Mark")
    }
    console.log(addressbook.find(findFirstName))

     
     /*
     UC-6 delete contact fro  addressbook
    using filter and arrow function
    */
    addressbook = addressbook.filter((e) => e._firstName != 'ABC');
    console.log("Array After Deleting Contact: ",addressbook);

  //UC-7 To find the Number of contacts in the array
  let numberOfContacts = addressbook.length;
  console.log("Number of Contacts are: "+numberOfContacts);
      /*UC8 To prevent duplicate entry in the Array
      */      
      let contact3 = new Contact('Pranav', 'Laaa', 'OSosoo', 'Pune', 'MH', '411091', '91 9111111111', 'swaraj@gmail.com')
      if(!addressbook.some(el => el._firstname != "Pranav"))
          addressbook.push(contact3);
      else
        console.log("Contact already Exists!")
        console.log("Array: ",addressbook);
  
        
       //UC-9 To Find for the Person in the Address Book 
       let findByCity = addressbook.filter((e) => e._city == 'Pune');
       console.log("Contacts by city: ",findByCity);
     
      
     
