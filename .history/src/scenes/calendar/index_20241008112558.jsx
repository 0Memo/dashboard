import { useState } from "react";
import FullCalendar from '@fullcalendar/react';
import  { formatDate } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import interactionPlugin from '@fullcalendar/interaction';
import { Box, List, ListItem, ListItemText, Typography, useTheme} from '@mui/material';
import Header from "../../components/Header";
import { tokens } from "../../theme";
import frLocale from '@fullcalendar/core/locales/fr';

const Calendar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [currentEvents, setCurrentEvents] = useState([]);

    const handleDateClick = (selected) => {
        const title = prompt('Veuillez saisir un titre pour votre événement');
        const calendarApi = selected.view.calendar;
        calendarApi.unselect();

        if(title) {
            calendarApi.addEvent({
                id: `${selected.dateStr}-${title}`,
                title,
                start: selected.startStr,
                end: selected.endStr,
                allDay: selected.allDay
            })
        }
    };

    const handleEventClick = (selected) => {
        if (window.confirm(`Êtes-vous sûr de vouloir supprimer l'événement '${selected.event.title}' ?`)) {
            selected.event.remove();
        }
    };

    return (
        <Box
            m='20px'
        >
            <Header
                title='CALENDRIER'
                subtitle='Calendrier Interactif'
            />
            <Box
                display='flex'
                justifyContent='space-between'
            >
                <Box
                    flex='1 1 20%'
                    backgroundColor={colors.primary[400]}
                    p='15px'
                    borderRadius='4px'
                >
                    <Typography
                        variant='h5'
                    >
                        Événements
                    </Typography>
                    <List>
                        { currentEvents.map((event) => (
                            <ListItem
                                key={event.id}
                                sx={{
                                    backgroundColor: colors.greenAccent[500],
                                    margin: '10px 0',
                                    borderRadius: '2px'
                                }}
                            >
                                <ListItemText
                                    primary={ event.title }
                                    secondary={
                                        <Typography>
                                            { formatDate(event.start, {
                                                year: 'numeric',
                                                month: 'short',
                                                day: 'numeric'
                                            })}
                                        </Typography>
                                    }
                                />
                            </ListItem>
                        ))}
                    </List>
                </Box>
                <Box
                    flex='1 1 100%'
                    ml='15px'
                >
                    <FullCalendar
                        timeZone={'local'}
                        locale={frLocale}
                        height='75vh'
                        plugins={[
                            dayGridPlugin,
                            timeGridPlugin,
                            interactionPlugin,
                            listPlugin
                        ]}
                        headerToolbar={{
                            left: 'prev, next today',
                            center: 'title',
                            right: 'dayGridMonth, timeGridWeek, timeGridDay, listMonth'
                        }}
                        initialView="dayGridMonth"
                        editable={true}
                        selectable={true}
                        selectMiror={true}
                        dayMaxEvents={true}
                        select={handleDateClick}
                        eventClick={handleEventClick}
                        eventsSet={(events) => setCurrentEvents(events)}
                        navLinks={true}
                        weekends={false}
                        initialEvents={[
                            {
                                id: '1234',
                                title: 'Événement journée',
                                date: '2024-10-11'
                            },
                            {
                                id: '4321',
                                title: 'Événement heure',
                                date: '2024-10-14'
                            },
                        ]}
                    />
                </Box>
            </Box>
        </Box>
    )
}

export default Calendar;