import { useState, useEffect } from 'react';
import { Calendar } from 'react-native-calendars';
import { Modal, View, StyleSheet, TouchableOpacity, StatusBar } from 'react-native';

const ReusableCalendar = ({ visible, setVisible, onDateSelection, busyDates }) => {
    const [selectedDates, setSelectedDates] = useState({});
    const [disabledDates, setDisabledDates] = useState({});

    useEffect(() => {
        const calculateDisabledDates = () => {
            let disabled = {};
            busyDates.forEach(({ checkInDate, checkOutDate }) => {
                let start = new Date(checkInDate);
                let end = new Date(checkOutDate);
                while (start <= end) {
                    const dateString = start.toISOString().split('T')[0];
                    disabled[dateString] = {
                        disabled: true,
                        disableTouchEvent: true,
                        customStyles: {
                            container: {
                                backgroundColor: 'red',

                                borderRadius: 0,
                            },
                            text: {
                                color: 'red',
                            },
                        },
                    };
                    start.setDate(start.getDate() + 1);
                }
            });
            setDisabledDates(disabled);
        };
        calculateDisabledDates();
    }, [busyDates]);

    const onDayPress = (day) => {
        if (disabledDates[day.dateString]) {
            return;
        }

        let markedDates = { ...selectedDates };
        if (!markedDates.start && !markedDates.end) {
            markedDates.start = day.dateString;
            markedDates[day.dateString] = { selected: true, startingDay: true, endingDay: true, color: 'blue' };
        } else if (markedDates.start && !markedDates.end) {
            let start = new Date(markedDates.start);
            let end = new Date(day.dateString);
            if (end < start) {
                markedDates.start = day.dateString;
                markedDates[day.dateString] = { selected: true, startingDay: true, endingDay: true, color: 'blue' };
            } else {
                markedDates.end = day.dateString;
                let cursor = new Date(start);
                while (cursor <= end) {
                    let dateString = cursor.toISOString().split('T')[0];
                    markedDates[dateString] = { selected: true, color: 'blue' };
                    cursor.setDate(cursor.getDate() + 1);
                }
                markedDates[end.toISOString().split('T')[0]] = { selected: true, endingDay: true, color: 'blue' };
                if (onDateSelection) {
                    onDateSelection(markedDates.start, markedDates.end);
                }
            }
        } else {
            markedDates = { start: day.dateString };
            markedDates[day.dateString] = { selected: true, startingDay: true, endingDay: true, color: 'blue' };
        }
        setSelectedDates(markedDates);
    };

    const combinedMarkedDates = { ...disabledDates, ...selectedDates };

    return (
        <Modal transparent={true} visible={visible} animationType="slide" onRequestClose={() => setVisible(false)}>
            <StatusBar hidden={true} translucent={false} />
            <TouchableOpacity activeOpacity={1} style={styles.modalContainer} onPressOut={() => setVisible(false)}>
                <View style={{ borderRadius: 15 }}>
                    <Calendar
                        horizontal={false}
                        hideExtraDays={true}
                        onDayPress={onDayPress}
                        markedDates={combinedMarkedDates}
                        markingType={'period'}
                        pagingEnabled={false}
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
