import SelectDropdown from 'react-native-select-dropdown'
import { SelectList } from 'react-native-dropdown-select-list'
import { FontAwesome, Ionicons } from '@expo/vector-icons'
import moment from 'moment'
import { useEffect, useState } from 'react'

export const SelectInput = ({ setHoraSelecionada }) => {

const dataAtual = moment().format('YYYY-MM-DD');
const [arrayOptions, setArrayOptions] = useState(null);

async function loadOptions() {
    const horasRestantes = moment(dataAtual).add(24, 'hours').diff(moment(), 'hours')
    console.log(horasRestantes);

    const options = Array.from({ lenght : horasRestantes }, (_, index) => {
        let valor = new Date().getHours() + (index + 1)

        return {
            label: `${valor}:00`, value: `${valor}:00`
        }
    })
    setArrayOptions(options)
}

useEffect(() => {
    loadOptions();
}, [])

  const data = [
    {key:'1', value:'18:00'},
    {key:'2', value:'20:00'},
    {key:'3', value:'22:00'},
    {key:'4', value:'10:00'},
    {key:'5', value:'12:00'},
]
    return(

    <SelectList
        boxStyles={{ width: '90%', height: 60, borderWidth: 2, borderColor: '#60BFC5', paddingTop: 17}}
        fontFamily='MontserratAlternates_600SemiBold'
        placeholder="Selecionar horário"
        setSelected={(val) => setSelected(val)} 
        data={data} 
        
        onValueChange={(value) => setHoraSelecionada(value)}
        items={arrayOptions}
        inputStyles={{ color: '#34898F'}}
        dropdownStyles={{ borderWidth: 2, borderColor: '#60BFC5' }}
        dropdownTextStyles={{ color: '#34898F'}}
        arrowicon={<Ionicons name="arrow-down-circle" size={24} color="#34898F" />}
        save="value"
        search={false}
/>
    )
}