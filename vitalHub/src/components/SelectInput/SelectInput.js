import { StyleSheet, View } from "react-native";

import { AntDesign } from '@expo/vector-icons';

import moment from "moment";
import { useEffect, useState } from "react";
import Picker from "react-native-picker-select";

export const SelectInput = ({ setHoraSelecionada }) => {
    // CONSTS
    const dataAtual = moment().format('YYYY-MM-DD');
    const [arrayOptions, setArrayOptions] = useState();


    // FUNCTIONS
    const LoadOptions = async () => {
        // capturar quanto tempo falta para as 24h
        const horasRestantes = moment(dataAtual).add(24, "hours").diff(moment(), "hours");

        // criar um laço que rode a quantidade de horas
        const options = Array.from({ length: horasRestantes }, (_, index) => {
            let valor = new Date().getHours() + (index + 1)

            // pra cada hora será gerada uma nova option
            return {
                label: `${valor}:00`, value: `${valor}:00`
            }
        })

        setArrayOptions(options);

        console.log(horasRestantes);
    }


    // EFFECTS
    useEffect(() => {
        LoadOptions();
    }, []);


    if (arrayOptions) {
        return (
            <View style={{ width: "90%", marginTop: 10, borderWidth: 2, borderRadius: 8, borderColor: "#34898F" }}>
                <Picker
                    style={style}
                    // Icon={() => { return <AntDesign name="caretdown" size={24} color="black" /> }}
                    placeholder={{
                        label: '--:--',
                        value: null,
                        color: '#34898F'
                    }}
                    onValueChange={(value) => setHoraSelecionada(value)}
                    items={arrayOptions}
                />
            </View>
        )     
    }
}

const style = StyleSheet.create({
    inputIOS: {
        fontSize: 16,
        padding: 16,
        borderWidth: 2,
        borderColor: '#60BFC5',
        borderRadius: 5,
        color: '#34898F',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'MontserratAlternates_600SemiBold'
    },
    inputAndroid: {
        fontSize: 16,
        padding: 16,
        borderWidth: 2,
        borderColor: '#60BFC5',
        borderRadius: 5,
        color: '#34898F',
        alignItems: 'center',
        justifyContent: 'center',

        fontFamily: 'MontserratAlternates_600SemiBold'
    },
    iconContainer: {
        top: '25%',
        marginRight: 10
    },
    placeholder: {
        color: '#34898F',
    },
})