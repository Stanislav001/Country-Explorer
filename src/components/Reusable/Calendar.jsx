import { useState } from 'react';
import { Calendar } from 'react-native-calendars';
import { Modal, View, StyleSheet, TouchableOpacity, StatusBar } from 'react-native';

const ReusableCalendar = ({ visible, setVisible, onDateSelection }) => {
    const [selectedDates, setSelectedDates] = useState({});

    const onDayPress = (day) => {
        let markedDates = { ...selectedDates };
        if (!markedDates.start && !markedDates.end) {
            markedDates.start = day.dateString;
            markedDates[day.dateString] = { selected: true, startingDay: true };
        } else if (markedDates.start && !markedDates.end) {
            let start = new Date(markedDates.start);
            let end = new Date(day.dateString);
            if (end < start) {
                markedDates.start = day.dateString;
                markedDates[day.dateString] = { selected: true, startingDay: true };
            } else {
                markedDates.end = day.dateString;
                let cursor = new Date(start);
                while (cursor <= end) {
                    let dateString = cursor.toISOString().split('T')[0];
                    markedDates[dateString] = { selected: true };
                    cursor.setDate(cursor.getDate() + 1);
                }
                markedDates[end.toISOString().split('T')[0]] = { selected: true, endingDay: true };
                if (onDateSelection) {
                    onDateSelection(markedDates.start, markedDates.end);
                }
            }
        } else {
            markedDates = { start: day.dateString };
            markedDates[day.dateString] = { selected: true, startingDay: true };
        }
        setSelectedDates(markedDates);
    };

    return (
        <Modal transparent={true} visible={visible} animationType="slide" onRequestClose={() => setVisible(false)}>
            <StatusBar hidden={true} translucent={false} />
            <TouchableOpacity activeOpacity={1} style={styles.modalContainer} onPressOut={() => setVisible(false)}>
                <View style={{ borderRadius: 15 }}>
                    <Calendar
                        onDayPress={onDayPress}
                        markedDates={selectedDates}
                        style={{ borderRadius: 15, padding: 10 }}
                    />
                </View>
            </TouchableOpacity>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
    },
});

export default ReusableCalendar;