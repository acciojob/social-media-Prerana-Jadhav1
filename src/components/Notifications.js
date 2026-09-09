import React from "react";

const Notifications = ({ notifications }) => {
  return (
    <div className="notifications">
      <h2>Notifications</h2>
      <section className="notificationsList">
        {notifications.map((notification) => (
          <div key={notification.id} className="notification-item">
            {notification.message}
          </div>
        ))}
      </section>
    </div>
  );
};

export default Notifications;
