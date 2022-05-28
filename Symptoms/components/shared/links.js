export const MAIN_LINK = "http://2b2c-37-54-167-219.ngrok.io";

export const ApiLinks = (
    {
        PATIENT:MAIN_LINK + "/patient",
        LOGIN:MAIN_LINK + "/login",
    }
)

export const additionalLinks = (
    {
        PATIENT_INFO:ApiLinks.PATIENT+"/getUserInfo",
       // SYMPTOMS_HISTORY:ApiLinks.PATIENT+"/getUserInfo",
    }
)



