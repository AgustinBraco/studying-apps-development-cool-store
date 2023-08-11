import { View, ActivityIndicator } from 'react-native';
import { styles } from './styles.js';
import { ImageSelector } from '../../components/index.js';
import { useSelector } from 'react-redux';
import { useUpdateImageProfileMutation, useGetProfileQuery } from '../../store/settings/api/index.js';
import { COLORS } from '../../themes/index.js';

function Profile() {
	const localId = useSelector((state) => state.auth.user.localId);

  const [uploadImageProfile, { data, isLoading, error }] = useUpdateImageProfileMutation();
  const { data: userData, isLoading: isLoadingUserData } = useGetProfileQuery({ localId });

	const onHandlerImage = async ({ uri, base64 }) => {
		await uploadImageProfile({
			localId,
			image: `data:image/jpeg;base64,${base64}`,
		});
	};

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <ImageSelector profileImage={userData?.profileImage} onSelect={onHandlerImage} />
        {isLoading && (
          <View style={styles.loaderContainer}>
            <ActivityIndicator size="large" color={COLORS.primary} />
          </View>
        )}
      </View>
    </View>
  );
};

export default Profile;
