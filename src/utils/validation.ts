import { Person } from "../pages/search";

export const validateInput = (formData: Partial<Person>, allRequired = false) => {
    if(allRequired) {
        if(formData.first_name?.trim() === '' || formData.last_name?.trim() === '' || formData.email?.trim() === '') {   
            return false
        }
    } else {
        if(formData.first_name?.trim() === '' && formData.last_name?.trim() === '' && formData.email?.trim() === '') {   
            return false
        }
    }

    return true
}