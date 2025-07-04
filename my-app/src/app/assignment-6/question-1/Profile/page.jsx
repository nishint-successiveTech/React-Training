import dynamic from 'next/dynamic'

const Profile = dynamic(()=> import('./Profile'),{
    loading:()=><p>Loading page</p>
})

const ProfilePage = () => {
  return <Profile />;
};
export default ProfilePage