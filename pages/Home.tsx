import {
  Badge,
  BadgeText,
  Box,
  Divider,
  HStack,
  Heading,
  Icon,
  ScrollView,
  Select,
  SelectBackdrop,
  SelectContent,
  SelectDragIndicator,
  SelectDragIndicatorWrapper,
  SelectIcon,
  SelectInput,
  SelectItem,
  SelectPortal,
  SelectTrigger,
  Text,
  VStack,
} from '@gluestack-ui/themed';
import {
  BellDot,
  BusFront,
  ChevronDownIcon,
  ChevronLeft,
  Menu,
  Route,
} from 'lucide-react-native';
import React from 'react';
import {Dimensions, SafeAreaView, TouchableOpacity} from 'react-native';

type Props = {
  navigation: any;
};

const Home = ({navigation}: Props) => {
  return (
    <SafeAreaView>
      <ScrollView minHeight={Dimensions.get('window').height as any}>
        <VStack
          gap="$3"
          w="100%"
          p="$4"
          bg="$white"
          minHeight={Dimensions.get('window').height}>
          <HStack justifyContent="space-between" alignItems="center">
            <TouchableOpacity>
              <Icon as={ChevronLeft} size={25 as any} />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('About')}>
              <Icon as={BellDot} size={30 as any} />
            </TouchableOpacity>
          </HStack>
          <VStack gap="$1">
            <Heading size="3xl" fontWeight="$semibold">
              JUTC-3421243
            </Heading>
          </VStack>
          {/* <ScrollView horizontal={true} borderWidth={2} h={100}> */}
          <HStack mt="$5" gap="$5" h={100}>
            <Box
              bg="$green700"
              p="$4"
              justifyContent="center"
              borderRadius="$3xl"
              w={120}>
              <VStack justifyContent="center" alignItems="center">
                <Text size="lg" color="$white" fontWeight="$semibold">
                  TUE
                </Text>
                <Text size="3xl" color="$white" fontWeight="$bold">
                  28
                </Text>
              </VStack>
            </Box>
            <Box
              bg="$coolGray100"
              p="$4"
              justifyContent="center"
              borderRadius="$3xl"
              borderWidth={1}
              borderStyle="dashed"
              borderColor="$coolGray400"
              w={120}>
              <VStack justifyContent="center" alignItems="center">
                <Text size="lg" color="$green700" fontWeight="$semibold">
                  WED
                </Text>
                <Text size="3xl" color="$green700" fontWeight="$bold">
                  29
                </Text>
              </VStack>
            </Box>
            <Box
              bg="$coolGray100"
              p="$4"
              justifyContent="center"
              borderRadius="$3xl"
              borderWidth={1}
              borderStyle="dashed"
              borderColor="$coolGray400"
              w={120}>
              <VStack justifyContent="center" alignItems="center">
                <Text size="lg" color="$green700" fontWeight="$semibold">
                  THU
                </Text>
                <Text size="3xl" color="$green700" fontWeight="$bold">
                  30
                </Text>
              </VStack>
            </Box>
            <Box
              bg="$coolGray100"
              p="$4"
              justifyContent="center"
              borderRadius="$3xl"
              borderWidth={1}
              borderStyle="dashed"
              borderColor="$coolGray400"
              w={120}>
              <VStack justifyContent="center" alignItems="center">
                <Text size="lg" color="$green700" fontWeight="$semibold">
                  FRI
                </Text>
                <Text size="3xl" color="$green700" fontWeight="$bold">
                  31
                </Text>
              </VStack>
            </Box>
          </HStack>
          <Select mt="$5">
            <SelectTrigger variant="outline" size="md">
              <SelectInput
                placeholder="Filter by time range"
                fontWeight="$semibold"
              />
              <SelectIcon mr="$3">
                <Icon as={ChevronDownIcon} />
              </SelectIcon>
            </SelectTrigger>
            <SelectPortal borderRadius="$2xl">
              <SelectBackdrop />
              <SelectContent>
                <SelectDragIndicatorWrapper>
                  <SelectDragIndicator />
                </SelectDragIndicatorWrapper>
                <SelectItem label="In the next 2 hours" value="1" />
                <SelectItem label="In the next hour" value="2" />
                <SelectItem label="Within 15 mins" value="3" />
                <SelectItem label="1 hour ago" value="4" />
                <SelectItem label="2 hours ago" value="5" />
              </SelectContent>
            </SelectPortal>
          </Select>
          {/* </ScrollView> */}
          <VStack borderRadius="$2xl" alignItems="flex-start" mt="$6">
            <HStack
              bg="$green50"
              w="$full"
              p="$5"
              justifyContent="space-between"
              borderTopLeftRadius="$2xl"
              borderTopRightRadius="$2xl"
              borderWidth={1}
              borderColor="$coolGray300">
              <HStack alignItems="center" gap="$2">
                <Icon as={Route} size={32 as any} />
                <VStack alignItems="flex-start">
                  <Text fontWeight="$bold" size="xl">
                    27 km
                  </Text>
                  <Text color="$green600" fontWeight="$medium">
                    Journey
                  </Text>
                </VStack>
              </HStack>
              <HStack alignItems="center" gap="$2">
                <Icon as={BusFront} size={32 as any} />
                <VStack alignItems="flex-start">
                  <Text fontWeight="$bold" size="xl">
                    1 hours
                  </Text>
                  <Text color="$green600" fontWeight="$medium">
                    Trip Time
                  </Text>
                </VStack>
              </HStack>
            </HStack>
            <VStack
              justifyContent="space-between"
              p="$5"
              w="$full"
              borderBottomLeftRadius="$2xl"
              borderBottomRightRadius="$2xl"
              borderLeftWidth={1}
              borderRightWidth={1}
              borderBottomWidth={1}
              borderColor="$coolGray300">
              <HStack
                w="100%"
                justifyContent="space-between"
                alignItems="center">
                <Heading size="md" color="$coolGray500" fontWeight="$medium">
                  Spanish Town Bus Park
                </Heading>
                <Heading size="lg" fontWeight="$bold">
                  12:40 pm
                </Heading>
              </HStack>
              <HStack
                w="100%"
                justifyContent="space-between"
                alignItems="center">
                <Heading size="md" color="$coolGray500" fontWeight="$medium">
                  Half-way-Tree Bus Park
                </Heading>
                <Heading size="lg" fontWeight="$bold">
                  1:40 pm
                </Heading>
              </HStack>
              <Badge size="md" variant="solid" action="success" mt="$3" w={75}>
                <BadgeText fontWeight="$semibold">Route 23</BadgeText>
              </Badge>
            </VStack>
          </VStack>
          <VStack borderRadius="$2xl" alignItems="flex-start" mt="$6">
            <HStack
              bg="$green50"
              w="$full"
              p="$5"
              justifyContent="space-between"
              borderTopLeftRadius="$2xl"
              borderTopRightRadius="$2xl"
              borderWidth={1}
              borderColor="$coolGray300">
              <HStack alignItems="center" gap="$2">
                <Icon as={Route} size={32 as any} />
                <VStack alignItems="flex-start">
                  <Text fontWeight="$bold" size="xl">
                    28.9 km
                  </Text>
                  <Text color="$green600" fontWeight="$medium">
                    Journey
                  </Text>
                </VStack>
              </HStack>
              <HStack alignItems="center" gap="$2">
                <Icon as={BusFront} size={32 as any} />
                <VStack alignItems="flex-start">
                  <Text fontWeight="$bold" size="xl">
                    1.2 hours
                  </Text>
                  <Text color="$green600" fontWeight="$medium">
                    Trip Time
                  </Text>
                </VStack>
              </HStack>
            </HStack>
            <VStack
              justifyContent="space-between"
              p="$5"
              w="$full"
              borderBottomLeftRadius="$2xl"
              borderBottomRightRadius="$2xl"
              borderLeftWidth={1}
              borderRightWidth={1}
              borderBottomWidth={1}
              borderColor="$coolGray300">
              <HStack
                w="100%"
                alignItems="center"
                justifyContent="space-between">
                <Heading size="md" color="$coolGray500" fontWeight="$medium">
                  Cross Roads Bus Park
                </Heading>
                <Heading size="lg" fontWeight="$bold">
                  3:45 pm
                </Heading>
              </HStack>
              <HStack
                w="100%"
                alignItems="center"
                justifyContent="space-between">
                <Heading size="md" color="$coolGray500" fontWeight="$medium">
                  Spanish Town Bus Park
                </Heading>
                <Heading size="lg" fontWeight="$bold">
                  5:00 pm
                </Heading>
              </HStack>
              <Badge size="md" variant="solid" action="success" mt="$3" w={80}>
                <BadgeText fontWeight="$semibold">Route 21B</BadgeText>
              </Badge>
            </VStack>
          </VStack>
        </VStack>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
