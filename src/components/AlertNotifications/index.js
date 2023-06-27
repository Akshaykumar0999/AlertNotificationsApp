// Write your code here
import {AiFillCheckCircle} from 'react-icons/ai'

import {RiErrorWarningFill} from 'react-icons/ri'
import {MdWarning, MdInfo} from 'react-icons/md'
import Notification from '../Notification'
import './index.css'

const AlertNotifications = () => {
  const renderSuccessView = () => (
    <Notification>
      <div className="notification-card">
        <div className="details-card">
          <AiFillCheckCircle className="icon-success" />
          <div className="details-card-1">
            <h1 className="heading success">Success</h1>
            <p className="description">
              You can access all the files in the folder
            </p>
          </div>
        </div>
      </div>
    </Notification>
  )
  const renderErrorView = () => (
    <Notification>
      <div className="notification-card">
        <div className="details-card">
          <RiErrorWarningFill className="icon-error" />
          <div className="details-card-1">
            <h1 className="heading error">Error</h1>
            <p className="description">
              Sorry, you are not authorized to have access to delete the file
            </p>
          </div>
        </div>
      </div>
    </Notification>
  )
  const renderWarningView = () => (
    <Notification>
      <div className="notification-card">
        <div className="details-card">
          <MdWarning className="icon-warning" />
          <div className="details-card-1">
            <h1 className="heading warning">Warning</h1>
            <p className="description">
              Viewers of this file can see comments and suggestions
            </p>
          </div>
        </div>
      </div>
    </Notification>
  )
  const renderInfoView = () => (
    <Notification>
      <div className="notification-card">
        <div className="details-card">
          <MdInfo className="icon-info" />
          <div className="details-card-1">
            <h1 className="heading info">Info</h1>
            <p className="description">
              Anyone on the internet can view these files
            </p>
          </div>
        </div>
      </div>
    </Notification>
  )
  return (
    <div className="app-container">
      <h1 className="main-heading">Alert Notifications</h1>
      {renderSuccessView()}
      {renderErrorView()}
      {renderWarningView()}
      {renderInfoView()}
    </div>
  )
}

export default AlertNotifications
