import { inscriptionType } from "./inscriptions"
import { eventType } from "./event"
import { activityType } from "./activity"
import { form612 } from "./form612"
import { formGarderie } from "./formGarderie"
import { formulaireMaker } from "./formulaireMaker"
import { pageMaker } from "./pageMaker"
import { heroSection } from "./pageMakerComponents/hero"
import { columnBlock } from "./pageMakerComponents/columnBlocks"
import { stackBlock } from "./pageMakerComponents/stackBlock"
import { largeTitle } from "./pageMakerComponents/largeTitle"
import { mediumTitle } from "./pageMakerComponents/mediumTitle"
import { smallTitle } from "./pageMakerComponents/smallTitle"
import { textInput } from "./pageMakerComponents/textInput"
import { stringText } from "./pageMakerComponents/string"
import { card } from "./pageMakerComponents/card"
import { button } from "./pageMakerComponents/button"
import { carousel } from "./pageMakerComponents/carousel"
import { textOnPicture } from "./pageMakerComponents/textOnPicture"
import { contact } from "./contact"
import { menuType } from "./menu"
import { contactFormType } from "./contactForm"
import { bannerType } from "./banner"
import { checkboxField } from "./formMakerComponents/checkboxField"
import { textField } from "./formMakerComponents/textField"
import { radioField } from "./formMakerComponents/radioField"
import { dropdownField } from "./formMakerComponents/dropdownField"
import { dateField } from "./formMakerComponents/datePicker"

export const schemaTypes = [
    inscriptionType,
    eventType,
    activityType,
    bannerType,
    form612,
    formGarderie,
    formulaireMaker,
    pageMaker,
    menuType,
    contactFormType,
    heroSection,
    columnBlock,
    stackBlock,
    largeTitle,
    mediumTitle,
    smallTitle,
    textInput,
    stringText,
    card,
    button,
    carousel,
    textOnPicture,
    contact,
    checkboxField,
    textField,
    dropdownField,
    radioField,
    dateField
]
