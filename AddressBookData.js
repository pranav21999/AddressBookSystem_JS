//UC2
class Contact {
  

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

    /*
    *Purpose:Validating all the Conatct using regex pattern and test usind .test method
     */
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
  
    toString() {
      return "\nContact[\nFirstName = "+ this.firstName +"\nLastName = "+this.lastName+"\nAddress = "+this.address+"\nCity ="+this.city+
         "\nState = "+this.state+"\nZip= "+this.zip+"\nPhoneNumber="+this.phoneNumber+"\nEmail="+this.email+"\n]";
    }
  }
    /*
    *passing values in the addressbook
     */  
  let contact=new Contact("Pranav","Dani","ABCDda",'Pune','Maharastra','789526','91 8987898789','abc@gmail.com');
  console.log(contact)