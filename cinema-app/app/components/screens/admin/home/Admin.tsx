import { FC } from 'react'

import { AdminNavigation, Layout } from '@/components/ui'
import { ScrollView } from 'react-native';
import Statistics from './statistics/Statistics';

const Admin: FC = () => {
	return (
		<Layout isHasPadding>
			<AdminNavigation title='Statistics' />
			<ScrollView showsVerticalScrollIndicator={false}>
				<Statistics />
			</ScrollView>
		</Layout>
	)
}
export default Admin
