// Variables
let fullName = document.querySelector("#fullName");
let address = document.querySelector("#address");
let phone = document.querySelector("#phonenumber");
let customer = document.querySelector("#customer");
let tour = document.querySelector("#tour");
let plane = document.querySelector("#plane");
let car = document.querySelector("#car");
let adult = document.querySelector("#adult");
let children = document.querySelector("#children");
let extraNotes = document.querySelector("#addNotes");
let agreeBtn = document.querySelector("#agree");
let resetBtn = document.querySelector("#reset");
let notification = document.querySelector("#notification");

const exam = {
  check(ele) {
    if (ele.value != "") return true;
    return false;
  },
  reset() {
    fullName.value = "";
    address.value = "";
    phonenumber.value = "";
    customer.check = false;
    tour.selectedIndex = "0";
    plane.check = true;
    adult.value = "";
    children.value = "";
    addNotes.value = "";
    notification.textContent = "";
  },
  handle() {
    const that = this;
    const fullnameReg = /[^a-zA-Z' ']*$/;
    const addressReg = /^[A-Za-z0-9]$/;
    const phonenumberReg = /^[0-9]{10}/;

    agreeBtn.onclick = function (e) {
      e.preventDefault();
      notification.textContent = "";

      // Get value
      let vehicle = plane.checked ? "Máy bay" : "Xe ô tô";

      if (
        that.check(fullName.value) &&
        that.check(address.value) &&
        that.check(phonenumber.value) &&
        customer.checked &&
        that.check(vehicle) &&
        that.check(adult.value) &&
        that.check(children.value)
      ) {
        let validFullname = fullnameReg.test(fullName.value);
        let validAddress = addressReg.test(address.value);
        let validPhonenumber = phonenumberReg.test(phonenumber.value);

        console.log(validFullname, validAddress, validPhonenumber);
        if (validFullname && validAddress && validPhonenumber) {
          notification.textContent = "Bạn đăng ký thành công";
          notification.style.color = "green";
        } else {
          notification.textContent = "Bạn nhập sai thông tin";
          notification.style.color = "red";
        }
      } else {
        notification.textContent = "Bạn chưa điền đủ thông tin!!!";
        notification.style.color = "red";
      }
    };
  },
  start() {
    this.handle();
  },
};

exam.start();
