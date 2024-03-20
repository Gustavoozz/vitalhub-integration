import { FontAwesome } from '@expo/vector-icons'
import { AppointmentBox, AppointmentIcon } from './Style'

export const ButtonPatient = ({ onPressSchedule }) => {
    return(
        <AppointmentBox onPress={onPressSchedule}>
       <FontAwesome name="stethoscope" size={30} color="white" />
    </AppointmentBox>
    )
}