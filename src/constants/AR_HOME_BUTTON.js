// import {ReactComponent as User} from '../images/user.svg';
import Star from '../assets/icons/star.svg'
// import {ReactComponent as Nurse} from '../images/nurse.svg';
import Clients from '../assets/icons/clients.svg'
import Messages from '../assets/icons/messages.svg'
import Broadcast from '../assets/icons/broadcast.svg'
import Employees from '../assets/icons/employees.svg'
import Appointment from '../assets/icons/appointment.svg'

export const AR_HOME_BUTTON = [
  {
    Icon: Appointment,
    href: '/appointment',
    name: 'Приёмы',
  },
  {
    Icon: Star,
    href: '/admin',
    name: 'События',
  },
  {
    Icon: Broadcast,
    href: '/broadcast',
    name: 'Оповещения',
  },
  {
    Icon: Messages,
    href: '/messages',
    name: 'Сообщения',
  },
  {
    Icon: Clients,
    href: '/clients',
    name: 'Клиенты',
  },
  {
    Icon: Employees,
    href: '/employees',
    name: 'Сотрудники',
  },
]
