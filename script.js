let jobInput = document.querySelector(".jobInput")
let jobOutput = document.querySelector(".r-job")

let firstName = document.querySelector(".first")
let lastName = document.querySelector(".last")
let nameOutput = document.querySelector(".fl-name")

let email = document.querySelector(".email")
let phone = document.querySelector(".phone")

let detailsOutput = document.querySelector(".details-output")
let emailoutput = document.querySelector(".emailOutput")
let phoneNo = document.querySelector(".phoneNo")

let linkedin = document.querySelector(".linkedin")
let postal = document.querySelector(".postal")
let cityState = document.querySelector(".city")
let country = document.querySelector(".country")

let address = document.querySelector(".address")
let placeOfBirth = document.querySelector(".placeOfBirth")
let DOB = document.querySelector(".DOB")

let linkedinOutput = document.querySelector(".linkeDin")
let postalCodeOutput = document.querySelector(".postalCode")
let cityStateOutput = document.querySelector(".cityState")
let addressOutput = document.querySelector(".addressOutput")
let countryOutput = document.querySelector(".countryOutput")

let dateOutput = document.querySelector(".dateOutput")
let placeOutput = document.querySelector(".placeOutput")
let datePlace = document.querySelector(".date-place")

let nationality = document.querySelector(".Nationality")
let nat = document.querySelector(".nat")
let natOutput = document.querySelector(".natOutput")

let drivingLicense = document.querySelector(".driving-license")
let drivLic = document.querySelector(".driv-lic")
let drivingOutput = document.querySelector(".drivingOutput")

let fileInput = document.querySelector("#fileInput")
let rightImg = document.querySelector(".resume-img")
let leftImg = document.querySelector(".img")
let imgOutput = document.querySelector(".imgOutput")

let job = document.querySelector(".job")
let employer = document.querySelector(".employer")
let state = document.querySelector(".state")

let allInfo = document.querySelector(".allinfo")
let jobEmpCity = document.querySelector(".job-emp-city")

let start = document.querySelector(".start")
let end = document.querySelector(".end")
let startDateEndDate = document.querySelector(".startDate-endDate")

let description = document.querySelector(".desc")
let descriptionOutput = document.querySelector(".descriptionOutput")

window.onload = function () {
    jobInput.value = localStorage.getItem("job") || ""
    jobOutput.innerHTML = jobInput.value

    firstName.value = localStorage.getItem("firstName") || ""
    lastName.value = localStorage.getItem("lastName") || ""
    updateName()

    email.value = localStorage.getItem("email") || ""
    phone.value = localStorage.getItem("phone") || ""

    emailoutput.innerHTML = email.value
    phoneNo.innerHTML = phone.value

    linkedin.value = localStorage.getItem("linkedin") || ""
    postal.value = localStorage.getItem("postal") || ""
    cityState.value = localStorage.getItem("city") || ""
    country.value = localStorage.getItem("country") || ""

    linkedinOutput.innerHTML = linkedin.value
    postalCodeOutput.innerHTML = postal.value
    cityStateOutput.innerHTML = cityState.value
    countryOutput.innerHTML = country.value

    address.value = localStorage.getItem("address") || ""
    addressOutput.innerHTML = address.value

    DOB.value = localStorage.getItem("dob") || ""
    placeOfBirth.value = localStorage.getItem("place") || ""
    dateOutput.innerHTML = DOB.value
    placeOutput.innerHTML = placeOfBirth.value

    nationality.value = localStorage.getItem("nationality") || ""
    natOutput.innerHTML = nationality.value

    drivingLicense.value = localStorage.getItem("driving") || ""
    drivingOutput.innerHTML = drivingLicense.value

    job.value = localStorage.getItem("jobExp") || ""
    employer.value = localStorage.getItem("employer") || ""
    state.value = localStorage.getItem("state") || ""

    start.value = localStorage.getItem("start") || ""
    end.value = localStorage.getItem("end") || ""

    description.value = localStorage.getItem("desc") || ""
    descriptionOutput.innerHTML = description.value

    if(email.value || phone.value) detailsOutput.style.display = "block"
    if(DOB.value || placeOfBirth.value) datePlace.style.display = "block"
    if(nationality.value) nat.style.display = "block"
    if(drivingLicense.value) drivLic.style.display = "block"

    Allinfo()
    date()
}

jobInput.addEventListener("input", function(){
    jobOutput.innerHTML = jobInput.value
    localStorage.setItem("job", jobInput.value)
})

function updateName(){
    let full = (firstName.value + " " + lastName.value).trim()
    nameOutput.innerHTML = full

    localStorage.setItem("firstName", firstName.value)
    localStorage.setItem("lastName", lastName.value)
}
firstName.addEventListener("input", updateName)
lastName.addEventListener("input", updateName)

email.addEventListener("input", function(){
    detailsOutput.style.display = "block"
    emailoutput.innerHTML = email.value
    localStorage.setItem("email", email.value)
})

phone.addEventListener("input", function(){
    detailsOutput.style.display = "block"
    phoneNo.innerHTML = phone.value
    localStorage.setItem("phone", phone.value)
})

linkedin.addEventListener("input", function(){
    detailsOutput.style.display = "block"
    linkedinOutput.innerHTML = linkedin.value
    localStorage.setItem("linkedin", linkedin.value)
})

postal.addEventListener("input", function(){
    detailsOutput.style.display = "block"
    postalCodeOutput.innerHTML = postal.value
    localStorage.setItem("postal", postal.value)
})

cityState.addEventListener("input", function(){
    detailsOutput.style.display = "block"
    cityStateOutput.innerHTML = cityState.value
    localStorage.setItem("city", cityState.value)
})

country.addEventListener("input", function(){
    detailsOutput.style.display = "block"
    countryOutput.innerHTML = country.value
    localStorage.setItem("country", country.value)
})

address.addEventListener("input", function(){
    detailsOutput.style.display = "block"
    addressOutput.innerHTML = address.value
    localStorage.setItem("address", address.value)
})

DOB.addEventListener("input", function(){
    datePlace.style.display = "block"
    dateOutput.innerHTML = DOB.value
    localStorage.setItem("dob", DOB.value)
})

placeOfBirth.addEventListener("input", function(){
    datePlace.style.display = "block"
    placeOutput.innerHTML = placeOfBirth.value
    localStorage.setItem("place", placeOfBirth.value)
})

nationality.addEventListener("input", function(){
    nat.style.display = "block"
    natOutput.innerHTML = nationality.value
    localStorage.setItem("nationality", nationality.value)
})

drivingLicense.addEventListener("input", function(){
    drivLic.style.display = "block"
    drivingOutput.innerHTML = drivingLicense.value
    localStorage.setItem("driving", drivingLicense.value)
})

fileInput.addEventListener("change", function(){
    let file = fileInput.files[0]
    if(file){
        let url = URL.createObjectURL(file)
        rightImg.src = url
        leftImg.src = url
        imgOutput.style.display = "block"
    }
})
function Allinfo(){
    let result = ""

    if(job.value.trim()) result += job.value.trim()
    if(employer.value.trim()) result += (result ? ", " : "") + employer.value.trim()
    if(state.value.trim()) result += (result ? ", " : "") + state.value.trim()

    allInfo.innerHTML = result
    if(job.value.trim() || employer.value.trim() || state.value.trim()){
        jobEmpCity.style.display = "block"
    } else {
        jobEmpCity.style.display = "none"
    }

    localStorage.setItem("jobExp", job.value)
    localStorage.setItem("employer", employer.value)
    localStorage.setItem("state", state.value)
}

job.addEventListener("input", Allinfo)
employer.addEventListener("input", Allinfo)
state.addEventListener("input", Allinfo)

function date(){
    let result = ""

    if(start.value) result += start.value
    if(end.value) result += (result ? " / " : "") + end.value
    startDateEndDate.innerHTML = result

    if(start.value || end.value){
        jobEmpCity.style.display = "block"
    }

    localStorage.setItem("start", start.value)
    localStorage.setItem("end", end.value)
}

start.addEventListener("input", date)
end.addEventListener("input", date)

description.addEventListener("input", function(){
    jobEmpCity.style.display = "block"
    descriptionOutput.innerHTML = description.value
    localStorage.setItem("desc", description.value)
})

let detailsBtn = document.querySelector(".details")
let show = document.querySelector(".hidden")

detailsBtn.addEventListener("click", function(){
    if(show.style.display == "none"){
        show.style.display = "block"
        detailsBtn.innerHTML = "Hide additonal details"
    } else {
        show.style.display = "none"
        detailsBtn.innerHTML = "Add more details"
    }
})

let profHidden = document.querySelector(".profHidden")
let profBtn = document.querySelector(".professional")

profBtn.addEventListener("click", function(){
    if(profHidden.style.display == "none"){
        profHidden.style.display = "block"
        profBtn.innerHTML = "Hide professional details"
    } else {
        profHidden.style.display = "none"
        profBtn.innerHTML = "Professional Experience"
    }
})
