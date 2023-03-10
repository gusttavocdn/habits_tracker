import {
  TouchableOpacity,
  View,
  Text,
  TouchableOpacityProps,
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import colors from 'tailwindcss/colors';

interface CheckBoxProps extends TouchableOpacityProps {
  title: string;
  checked?: boolean;
}

export function CheckBox({ title, checked = false, ...rest }: CheckBoxProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      className='flex-row mb-2 items-center'
      {...rest}
    >
      {checked ? (
        <View className='h-8 w-8 mr-4 bg-green-500 rounded-lg items-center justify-center'>
          <Feather name='check' size={20} color={colors.white} />
        </View>
      ) : (
        <View className='h-8 w-8 mr-4 bg-zinc-900 rounded-lg items-center justify-center' />
      )}

      <Text className='text-white font-semibold'>{title}</Text>
    </TouchableOpacity>
  );
}
