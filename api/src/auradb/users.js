const users = [
  {
    id: 1000000000000001,
    mfa: false,
    username: 'MStone',
    email: 'madisonmstone@gmail.com',
    phone: 8034098881,
    firstName: 'Madison',
    lastName: 'Stone',
    birthDate: '01-24-2000',
    joinDate: '01-07-2024',
    streetAddress: '5250 W 80TH AVE',
    city: 'Arvada',
    state: 'CO',
    zip: 80003,
    friends: ['MSheehan', 'SJohns']
  },
  {id: 1000000000000002, mfa: false, username: 'MSheehan', email: 'sheehant.matt@gmail.com', phone: 6084493954, firstName: 'Matt', lastName: 'Sheehan', birthDate: '09-28-1997', joinDate: '01-07-2024', streetAddress: '5250 W 80TH AVE', city: 'Arvada', state: 'CO', zip: 80003, friends: ['MStone', 'APIUser']},
  {id: 1000000000000003, mfa: false, username: 'APIUser', email: 'mattsheehan106@gmail.com', phone: 1234567890, firstName: 'API', lastName: 'User', birthDate: '01-07-2024', joinDate: '01-07-2024', streetAddress: 'NA', city: 'NA', state: 'NA', zip: 0, friends: ['MSheehan']},
  {id: 1000000000000004, mfa: false, username: 'SJohns', email: 'sydney.johns@gmail.com', phone: 1234567890, firstName: 'Sydney', lastName: 'Johns', birthDate: '05-04-2002', joinDate: '01-07-2024', streetAddress: 'NA', city: 'Athens', state: 'GA', zip: 0, friends: ['MStone']}
]
export default users;