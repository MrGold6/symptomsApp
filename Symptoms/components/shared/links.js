export const MAIN_LINK = "http://19fd-37-54-167-219.ngrok.io";

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
        //SYMPTOMS_HISTORY:ApiLinks.PATIENT+"/getUserInfo",
    }
)



