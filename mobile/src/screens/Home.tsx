import { useNavigation } from '@react-navigation/native';
import { View, Text, ScrollView, Alert } from 'react-native';
import { HabitDay, DAY_SIZE } from '../components/HabitDay';
import { Header } from '../components/Header';
import { generateDatesFromYearBeginning } from '../utils/generate-dates-from-year-beginning';
import { api } from '../lib/axios';
import { useState, useEffect } from 'react';
import { Loading } from '../components/Loading';

const weekDays = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];
const datesFromYearStart = generateDatesFromYearBeginning();
const minSummaryDateSizes = 18 * 5;
const amountOfDaysToFill = minSummaryDateSizes - datesFromYearStart.length;

export function Home() {
  const [loading, setLoading] = useState(true);
  const [summary, setSummary] = useState(null);
  const { navigate } = useNavigation();

  console.log(summary);

  const fetchData = async () => {
    try {
      setLoading(true);
      const { data } = await api.get('/summary');
      setSummary(data);
    } catch {
      Alert.alert('Ops', 'Não foi possivel carregar o súmario dos habitos');
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <Loading />;

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <View className='flex-1 bg-background px-8 pt-16'>
      <Header />

      <View className='flex-row mt-6 mb-2'>
        {weekDays.map((weekDay, i) => (
          <Text
            key={`${weekDay}-${i}`}
            className='text-zinc-400 text-xl font-bold text-center mx-1'
            style={{ width: DAY_SIZE }}
          >
            {weekDay}
          </Text>
        ))}
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        <View className='flex-row flex-wrap'>
          {datesFromYearStart.map((date) => (
            <HabitDay
              key={date.toISOString()}
              onPress={() => navigate('habit', { date: date.toISOString() })}
            />
          ))}

          {amountOfDaysToFill > 0 &&
            Array.from({ length: amountOfDaysToFill }).map((_, i) => (
              <View
                key={`empty-${i}`}
                className='bg-zinc-00 rounded-lg border-2 m-1 border-zinc-800 opacity-40'
                style={{ width: DAY_SIZE, height: DAY_SIZE }}
              />
            ))}
        </View>
      </ScrollView>
    </View>
  );
}
