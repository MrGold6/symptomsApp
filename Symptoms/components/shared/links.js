export const MAIN_LINK = "http://90c1-37-54-167-219.ngrok.io";


export const ApiLinks = (
    {
        PATIENT:MAIN_LINK + "/patient",
        LOGIN:MAIN_LINK + "/login",
        BODY_PART:MAIN_LINK + "/body_part",
    }
)

export const additionalLinks = (
    {
        PATIENT_INFO:ApiLinks.PATIENT+"/getUserInfo",
        PATIENT_SEX:ApiLinks.PATIENT+"/getUserSex",
    }
)



