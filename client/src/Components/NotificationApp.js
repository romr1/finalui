import NotifyMe from 'react-notification-timeline';
//https://blog.greenroots.info/a-notification-timeline-using-react
export default function NotificationApp() {
    return (<NotifyMe
        data={data}
        storageKey='notific_key'
        notific_key='timestamp'
        notific_value='update'
        heading='Notification Alerts'
        sortedByKey={false}
        showDate={true}
        size={64}
        color="yellow"
    />
    );
}


//https://csshint.com/css-notification-bell-icon/