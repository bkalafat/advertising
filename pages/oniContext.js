import React, { Component } from 'react';
import emailjs from 'emailjs-com';
import {
  webAppPackages,
  mobileAppPackages,
  softwareDeveleopmentPackages,
  seoMarketingPackages,
} from '../data/business-services/index';
const ProductContext = React.createContext();

let initstate = {
  name: '',
  number: '',
  message: '',
  email: '',
  messageSent: false,
  errors: {},
  addONS: {
    name: 'price',
  },
  total: 0,
  moreInfoNeeded: true,
  isModalOpen: false,
  activePackage: [],
  finalPackage: {},
  progress: 0
};

class ProductProvider extends Component {
  state = {
    name: '',
    number: '',
    message: '',
    email: '',
    messageSent: false,
    errors: {},
    addONS: {
      name: 'price',
    },
    total: 0,
    moreInfoNeeded: true,
    isModalOpen: false,
    activePackage: [],
    finalPackage: {},
    progress: 0
  };

  setThemeColor = (color) => {
    switch (color) {
      case 'blue':
        document.body.style.setProperty(
          '--primary',
          'linear-gradient(to right, #33ccff 0%, #3366ff 100%)'
        );
        document.body.style.setProperty('--primary1', '#3366ff');
        document.body.style.setProperty('--primary2', '#33ccff');
        document.body.style.setProperty(
          '--primary3',
          'rgba(52, 106, 255, 0.1)'
        );
        document.body.style.setProperty(
          '--bannerimg',
          'url(/assets/images/banner/bg1.png)'
        );

        break;

      case 'green':
        document.body.style.setProperty(
          '--primary',
          'linear-gradient(to right, #184e68 0%, #57ca85 100%)'
        );
        document.body.style.setProperty('--primary1', '#57ca85');
        document.body.style.setProperty('--primary2', '#184e68');
        document.body.style.setProperty('--primary3', 'rgba(24, 78, 104, 0.1)');
        document.body.style.setProperty(
          '--bannerimg',
          'url(/assets/images/banner/bg4.png)'
        );
               

        break;
      default:
        break;
    }
  }
  handleFinalPackage = (servicePackage) => {
    this.setState({ finalPackage: servicePackage })
    
    setTimeout(() => {
      alert("Package Final")
      console.log(this.state.finalPackage)
    }, 300);
  }

  handleActivePackage = (packageName) => {
    
    
    switch (packageName) {
      case 'webPackages':
        this.setState({ activePackage: webAppPackages });

        break;
      case 'mobileAppPackages':
        this.setState({ activePackage: mobileAppPackages });
        break;
      case 'softwareDevelopmentPackages':
        this.setState({ activePackage: softwareDeveleopmentPackages });

        break;
      case 'seoMarketingPackages':
        this.setState({ activePackage: seoMarketingPackages });
        break;
      default:
      // code block
    }
    setTimeout(() => {
     console.log(this.state.activePackage)
    }, 300);
  };
  handleModal = (e) => {
    this.setState({ isModalOpen: !this.state.isModalOpen });
  };

  sendEmail = (e) => {
    alert('E Sent');

    this.handleErrors();
    if (!this.state.errors) {
      console.log(this.state);
      emailjs
        .send(
          'OniDev',
          'onidev',
          {
            senderEmail: this.state.email,
            senderName: this.state.name,
            senderMessage: this.state.message,
            senderPhoneNumber: this.state.number,
            receiverEmail: 'tyriquedaniel14@gmail.com',
            number: 0,
            total: '10000',
            addOns: 'Everything',
          },
          'user_ra9kLqa47SSFhb4QI3Swp'
        )
        .then(
          (result) => {
            console.log(result.text);
            this.setState({ messageSent: true });
            setTimeout(() => {
              this.setState((prev) => ({ ...prev, ...initstate }));
              console.log(this.state);
            }, 3000);
          },
          (error) => {
            console.log(error.text);
            alert(error.text);
          }
        );
    } else {
      console.log('Error');
    }
  };
  //Set FieldS State
  setField = (targetID, textValue) => {
    console.log('Run');
    this.setState(() => {
      return {
        [targetID]: textValue,
      };
    });
    setTimeout(() => {
      console.log(this.state);
    }, 300);
  };

  handleErrors = (e) => {
    const error = {};
    if (!this.state.name) {
      error.name = 'First Name field shouldn’t be empty';
      this.setState({ name: 'First Name field shouldn’t be empty' });
    }
    if (!this.state.number) {
      error.number = 'Number field shouldn’t be empty';
      this.setState({ number: 'Number field shouldn’t be empty' });
    }
    if (!this.state.email) {
      error.email = 'Email field shouldn’t be empty';
      this.setState({ email: 'Email field shouldn’t be empty' });
    }
    if (!this.state.message) {
      error.message = 'Message field shouldn’t be empty';
      this.setState({ message: 'Message field shouldn’t be empty' });
    }
    if (Object.keys(error).length === 0) {
      alert('PASS');
      this.setState({
        errors: false,
      });
    } else {
      this.setState({
        errors: error,
      });
      return;
    }
  };

  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          setValue: this.setField,
          handleSubmit: this.sendEmail,
          handleModal: this.handleModal,
          handleActPackage: this.handleActivePackage,
          handleFinalPackage: this.handleFinalPackage,
          setBackground: this.setThemeColor
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer, ProductContext };
