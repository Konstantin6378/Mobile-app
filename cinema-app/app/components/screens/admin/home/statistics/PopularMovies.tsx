import { useTrending } from '@/components/screens/trending/useTrending'
import {FC} from 'react'
import {View, Text} from 'react-native'

const PopularMovies: FC = () => {
  const {movies, isLoading} = useTrending(2)
  return (
      <View>
         <Text>PopularMovies</Text>
      </View>
  )
}
export default PopularMovies