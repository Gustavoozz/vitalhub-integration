import { useEffect, useState } from "react";

import { Calendar, LocaleConfig } from "react-native-calendars";

<<<<<<< HEAD
const CalendarComponent = (setDataSelecionada, dataSelecionada) => {
=======
export const CalendarComponent = ({
  setDataConsulta,
  dataConsulta
}) => {
  // CONSTS
>>>>>>> develop
  const [selected, setSelected] = useState("");
  const currentDate = new Date();
  const startingDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate());



  // CONFIGS
  LocaleConfig.locales["pt-br"] = {
    monthNames: [
      "Janeiro", "Fevereiro", "Março", "Abril",
      "Maio", "Junho", "Julho", "Agosto",
      "Setembro", "Outubro", "Novembro", "Dezembro",
    ],
    monthNamesShort: [
      "Jan", "Fev", "Mar", "Abr", "Mai",
      "Jun", "Jul", "Ago", "Set", "Out",
      "Nov", "Dez",
    ],
    dayNames: [
      "Domingo", "Segunda", "Terça", "Quarta",
      "Quinta", "Sexta", "Sábado",
    ],
    dayNamesShort: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"],
  };
  LocaleConfig.defaultLocale = "pt-br";



  // FUNCTIONS
  const HandlePress = (date) => {
    setSelected(date.dateString);
    setDataConsulta(date.dateString);
  }



  return (
    <Calendar
      hideArrows={true}
      style={{
<<<<<<< HEAD
        width : 420,
        alignSelf : 'center',
        backgroundColor : '#FAFAFA'
        
      }}

      
    
      onDayPress={(date) => {
        setDataSelecionada(date.dateString);
=======
        width: 420,
        alignSelf: 'center',
        backgroundColor: '#FAFAFA'
>>>>>>> develop
      }}
      onDayPress={(date) => HandlePress(date)}
      markedDates={{
        [dataSelecionada]: {
          selected: true,
          disableTouchEvent: true
        },
      }}
<<<<<<< HEAD

      minDate={startingDate.toString()}

=======
      minDate={startingDate.toDateString()}
>>>>>>> develop
      theme={{
        calendarBackground: '#FAFAFA',

        arrowColor: '#49B3BA',
        textDisabledColor: '#C6C5CE',
        todayTextColor: '#5F5C6B',
        selectedDayTextColor: '#FAFAFA',
        selectedDayBackgroundColor: '#60BFC5',

        textDayFontSize: 16,
        textMonthFontSize: 25,
        textDayHeaderFontSize: 12,

        textDayStyle: { "color": '#5F5C6B' },

        textDayFontFamily: "Quicksand_600SemiBold",
        textDayHeaderFontFamily: "Quicksand_600SemiBold",
        textMonthFontFamily: "MontserratAlternates_600SemiBold",
      }}
    />
  );
};