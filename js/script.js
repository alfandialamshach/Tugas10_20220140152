let date = new Date();
      let hour = date.getHours();
      let greeting;

      if (hour < 12) {
        greeting = "Pagi";
      } else if (hour < 18) {
        greeting = "Siang";
      } else {
        greeting = "Malam";
      }

      document.getElementById("greeting").innerHTML = greeting;

      setInterval(() => {
        let now = new Date();
        document.getElementById("date").innerHTML = now.toDateString();
        document.getElementById("time").innerHTML = now.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
        document.getElementById("currentYear").innerText = now.getFullYear();
      }, 1000);