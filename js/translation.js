const exampleElement = document.getElementById("body");

const enBtn = document.getElementById("enBtn");
const arBtn = document.getElementById("arBtn");


const small_rectangle = document.getElementById("small_rectangle");
const second_small_rectangle = document.getElementById(
  "second_small_rectangle"
);
const first_inner_image = document.getElementById("first_inner_image");
const hidden_border = document.getElementById("hidden_border");
const line = document.getElementById("line");
const customer_image = document.getElementById("customer_image");
const customer_image2 = document.getElementById("customer_image2");
const customer_image3 = document.getElementById("customer_image3");
const customer_image4 = document.getElementById("customer_image4");

const svgCart = document.getElementById("svgCart");
const svgFatora = document.getElementById("svgFatora");
const svgPos = document.getElementById("svgPos");
const svgWho = document.getElementById("svgWho");

const svgServices = document.getElementById("svgServices");
const svgWorks = document.getElementById("svgWorks");
const svgContact = document.getElementById("svgContact");

/* Start :: Header*/
const home = document.getElementById("home");
const aboutUs = document.getElementById("aboutUs");
const ourServices = document.getElementById("ourServices");
const ourProject = document.getElementById("ourProject");
const contact = document.getElementById("contact");

/*End:: Header*/

/* Start:: Hero Section */
const quality = document.getElementById("quality");
const more = document.getElementById("more");
const second_inner_image = document.getElementById("second_inner_image");
/* End:: Hero Section */

/* Start:: About Section */
const berif = document.getElementById("berif");
const name_about = document.getElementById("name_about");
const more_about = document.getElementById("more_about");
/* End:: About Section */

/* Start:: Projects Section */
const projects_title = document.getElementById("projects_title");
const projects_more = document.getElementById("projects_more");
const projects_more1 = document.getElementById("projects_more1");
const projects_more2 = document.getElementById("projects_more2");

/* End:: Projects Section */

/* Start:: customers Section */
const customerTitle = document.getElementById("customerTitle");
/* End:: customers Section */

/* Start:: Services Section*/
const techSupport = document.getElementById("techSupport");
const security = document.getElementById("security");
const updates = document.getElementById("updates");
const fullSecurity = document.getElementById("fullSecurity");
const differentProgrames = document.getElementById("differentProgrames");
const specialProgrammes = document.getElementById("specialProgrammes");

/* End:: Services Section*/

/* Start:: contact Section*/
const getConsult = document.getElementById("getConsult");
const send = document.getElementById("send");
const name = document.getElementById("name");
const email = document.getElementById("email");
const address = document.getElementById("address");
const messageAddress = document.getElementById("messageAddress");
/* end:: contact Section*/

/* Start :: Footer*/
const comany_name = document.getElementById("comany_name");
const social = document.getElementById("social");
const importantLinks = document.getElementById("importantLinks");
const whoUs = document.getElementById("whoUs");
const ourServies = document.getElementById("ourServies");
const ourWorks = document.getElementById("ourWorks");
const contactUs = document.getElementById("contactUs");
const ourProjects = document.getElementById("ourProjects");
const eFatora = document.getElementById("eFatora");
const lPos = document.getElementById("lPos");
const lCart = document.getElementById("lCart");
const copyRight = document.getElementById("copyRight");
/* End:: Footer*/
const languageSelect = document.getElementById("language-select");
const languageSelect2 = document.getElementById("language-select2");

languageSelect.addEventListener("click", function () {
  localStorage.setItem("language", languageSelect.value);

    // arabic code here

    // arBtn.classList.add("hide_icon");
    // enBtn.classList.add("show_icon");

    languageSelect.classList.add("hide_icon");
    languageSelect2.classList.remove("hide_icon");

    document.getElementById("next").classList.add("hide_icon");
    document.getElementById("prev").classList.remove("hide_icon");

    exampleElement.classList.remove("ltr");
    exampleElement.classList.add("rtl");

  

    small_rectangle.classList.add("small_in_en");
    second_small_rectangle.classList.add("second_small_in_en");

    // hidden_border.classList.add("hidden_border_ar");
    // hidden_border.classList.remove("hidden_border");

    customer_image.classList.remove("dir_left");
    customer_image.classList.add("dir_right");

    customer_image2.classList.remove("dir_left");
    customer_image2.classList.add("dir_right");

    customer_image3.classList.remove("dir_left");
    customer_image3.classList.add("dir_right");

    customer_image4.classList.remove("dir_left");

    customer_image4.classList.add("dir_right");

    first_inner_image.classList.remove("top_en");
    first_inner_image.classList.add("top_ar");

    second_inner_image.classList.remove("top_en");
    second_inner_image.classList.add("top_ar");

    svgCart.classList.add("rotate");
    svgPos.classList.add("rotate");
    svgFatora.classList.add("rotate");
    svgWho.classList.add("rotate");
    svgServices.classList.add("rotate");
    svgWorks.classList.add("rotate");
    svgContact.classList.add("rotate");

    /* Start:: Header Translation*/
    home.textContent = "الرئيسية";
    aboutUs.textContent = "من نحن";
    ourServices.textContent = "اتصل بنا";
    ourProject.textContent = "خدماتنا";
    contact.textContent = "أعمالنا";

    /* End:: Header Translation*/

    /* Start:: Hero Section */
    quality.textContent = "كفاءة عمل منشأتك اعلي مع حل";
    more.textContent = "إقرأ المزيد";

    /* End:: Hero Section */

    // Start:: About Translation
    berif.textContent = "نبذه مختصره عن";
    name_about.textContent = "حل";
    more_about.textContent = "إقرأ المزيد";
    // End:: About Translation

    // Start:: projects Section
    projects_title.textContent = "مشاريعنا";
    projects_more.textContent = "إقرأ المزيد";
    projects_more1.textContent = "إقرأ المزيد";
    projects_more2.textContent = "إقرأ المزيد";

    // End:: projects Section

    // Start:: customers Section
    customerTitle.textContent = "اَراء عملاؤنا";
    // End:: customers Section

    /* Start:: Services Sections */
    techSupport.textContent = "دعم فني مجاناً";
    security.textContent = "أمن وتشفير المعلومات";
    updates.textContent = "تحديثات دورية مجانية لبرامجنا";
    fullSecurity.textContent = "امن وتشفير كامل";
    differentProgrames.textContent = "برامج مخصصة بدقة لمختلف أحجام المؤسسات";
    specialProgrammes.textContent = "برامج مخصصة بدقة";
    /* End:: Services Sections */

    /* Start:: contact Section*/
    getConsult.textContent = "احصل على استشارة مجانية";
    send.textContent = "إرسال";
    name.textContent = "الاسم";
    email.textContent = "البريد الالكتروني";
    message.textContent = "الرسالة";
    messageAddress.textContent = "عنوان الرسالة";
    /* end:: contact Section*/

    /* Start:: Footer Translation*/
    comany_name.textContent = "حل";
    social.textContent = "التواصل الاجتماعي";
    importantLinks.textContent = "روابط هامة";
    whoUs.textContent = "من نحن";
    ourServies.textContent = "خدماتنا";
    ourWorks.textContent = "اعمالنا";
    contactUs.textContent = "اتصل بنا";
    ourProjects.textContent = "مشاريعنا";
    eFatora.textContent = "إي فاتورة";
    lPos.textContent = "حل pos";
    lCart.textContent = "حل كارت";
    copyRight.textContent = "جميع الحقوق محفوظة لشركة حل سوفت 2023";
    /* End:: Footer Translation*/
  
});





languageSelect2.addEventListener("click", function () {
  localStorage.setItem("language", languageSelect2.value);
 

    languageSelect.classList.remove("hide_icon");
    languageSelect2.classList.add("hide_icon");
    console.log('sssssssssssss')
    // localStorage.setItem("language", languageSelect.value);
    // english code here
    document.getElementById("prev").classList.add("hide_icon");
    document.getElementById("next").classList.remove("hide_icon");

    exampleElement.classList.remove("rtl");
    exampleElement.classList.add("ltr");

    // hidden_border.classList.remove("hidden_border_ar");
    // hidden_border.classList.add("hidden_border");

    customer_image.classList.remove("dir_right");
    customer_image.classList.add("dir_left");

    customer_image2.classList.remove("dir_right");
    customer_image2.classList.add("dir_left");

    customer_image3.classList.remove("dir_right");
    customer_image3.classList.add("dir_left");

    customer_image4.classList.remove("dir_right");
    customer_image4.classList.add("dir_left");


    small_rectangle.classList.remove("small_in_en");
    second_small_rectangle.classList.remove("second_small_in_en");
    first_inner_image.classList.remove("top_ar");
    first_inner_image.classList.add("top_en");
    second_inner_image.classList.remove("top_ar");
    second_inner_image.classList.add("top_en");

    svgCart.classList.remove("rotate");
    svgPos.classList.remove("rotate");
    svgFatora.classList.remove("rotate");
    svgWho.classList.remove("rotate");
    svgServices.classList.remove("rotate");
    svgWorks.classList.remove("rotate");
    svgContact.classList.remove("rotate");

    /* Start:: Header Translation*/
    home.textContent = "Home";
    aboutUs.textContent = "About us";
    ourServices.textContent = "Our Services";
    ourProject.textContent = "Contact us";
    contact.textContent = "Our Projects";

    /* End:: Header Translation*/

    /* Start:: Hero Section */
    quality.textContent =
      "The efficiency of your facility work is higher with a Soft";

    more.textContent = "Read More";
    /* End:: Hero Section */

    // Start:: About Translation
    berif.textContent = "Brief summary of";
    name_about.textContent = "7L";
    more_about.textContent = "More";
    // End:: About Translation

    // Start:: projects Section
    projects_title.textContent = "Our Projects";
    projects_more.textContent = "More";
    projects_more1.textContent = "More";
    projects_more2.textContent = "More";
  
    // End:: projects Section

    /* Start:: Services Sections */
    techSupport.textContent = "Free technical support";
    security.textContent = "Information security and encryption";
    updates.textContent = "Free periodic updates to our software";
    fullSecurity.textContent = "Full security and encryption";
    differentProgrames.textContent =
      "Strictly customized software for organizations of all sizes";
    specialProgrammes.textContent = "Strictly customized software";
    /* End:: Services Sections */

    //Start:: Customers Section
    customerTitle.textContent = "Customers Opinions";
    // End:: Customers Section

    /* Start:: contact Section*/
    getConsult.textContent = "Get a free consultation";
    send.textContent = "send";
    name.textContent = "Name";
    email.textContent = "Email";
    message.textContent = "Meassage";
    messageAddress.textContent = "Message Address";
    /* end:: contact Section*/

    /* Start:: Footer Translation*/
    comany_name.textContent = "7L";
    social.textContent = "Social Media";
    importantLinks.textContent = "Important Links";
    whoUs.textContent = "Who Us";
    ourServies.textContent = "Our Servies";
    ourWorks.textContent = "Our Works";
    contactUs.textContent = "Contact Us";
    ourProjects.textContent = "Our Projects";
    eFatora.textContent = "E Fatora";
    lPos.textContent = "7l Pos";
    lCart.textContent = "7l Cart";
    copyRight.textContent = "All rights reserved to 7L Soft Company 2023";
    /* End:: Footer Translation*/
  
});
