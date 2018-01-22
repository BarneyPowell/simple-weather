export default () => {


    //const days = new Array(5);
    const days = Array.from(Array(5).keys());
    const hours = Array.from(Array(24).keys());

    const today = new Date();
 
    const forecast = days.map((day, idx) => {
            return {
                date: new Date(today.getFullYear(), today.getMonth(), today.getDate() + day),
                hours: hours.map((hour) => {
                    return {
                        hour,
                        temp: ((Math.random() * 8) + 8) - (Math.random() * (hour - (hours.length / 2)))
                    }
                })
            }
        });
    

    return {
        location: {
            name: 'London',
        },
        forecast
    }
}