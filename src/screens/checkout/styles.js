import {Dimensions, StyleSheet} from 'react-native';
import COLORS from '../../constants/colors';
import FONT_FAMILY from '../../constants/fonts';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.Concrete,
    position: 'relative',
  },
  headerContainer: {
    height: Dimensions.get('window').height * 0.103,
    backgroundColor: COLORS.Transparent,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  titleContainer: {
    height: Dimensions.get('window').height * 0.14,
    backgroundColor: COLORS.Transparent,
    paddingLeft: 50,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  AddressDetails: {
    height: Dimensions.get('window').height * 0.08,
    backgroundColor: COLORS.Transparent,
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingLeft: 50,
  },
  BoxContainer: {
    height: Dimensions.get('window').height * 0.22,
    backgroundColor: COLORS.Transparent,
    paddingLeft: 50,
    paddingRight: 49,
  },
  TotalContainer: {
    backgroundColor: COLORS.Transparent,
    height: Dimensions.get('window').height * 0.13,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  ButtonContainer: {
    height: Dimensions.get('window').height * 0.22,
    backgroundColor: COLORS.Transparent,
    justifyContent: 'center',
    alignItems: 'center',
  },
  TotalText: {
    fontSize: 17,
    // fontWeight: 400,
    fontFamily: FONT_FAMILY.TextBold,
    color: COLORS.Black,
    position: 'absolute',
    left: 50,
  },
  priceText: {
    fontSize: 22,
    fontFamily: FONT_FAMILY.TextBold,
    color: COLORS.Black,
    position: 'absolute',
    right: 49,
  },
  DeliveryMethod: {
    height: Dimensions.get('window').height * 0.08,
    backgroundColor: COLORS.Transparent,
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    paddingLeft: 50,
    marginBottom: 20,
  },
  Checkout: {
    fontSize: 18,
    fontFamily: FONT_FAMILY.TextBold,
    color: COLORS.Black,
  },
  Chevron: {
    alignSelf: 'flex-start',
    position: 'absolute',
    bottom: 2,
    left: 50,
    top: 66,
  },
  DeliveryText: {
    fontFamily: FONT_FAMILY.TextBold,
    fontSize: 34,
    color: COLORS.Black,
  },
  AddressText: {
    fontFamily: FONT_FAMILY.TextBold,
    fontSize: 17,
    color: COLORS.Black,
  },
  changeText: {
    fontSize: 15,
    color: COLORS.Tahiti_Gold,
    fontFamily: FONT_FAMILY.TextRegular,
    position: 'absolute',
    right: 57,
  },
  whiteBox: {
    borderRadius: 20,
    backgroundColor: COLORS.White,
    flex: 1,
  },
  Box: {
    height: '50%',
    borderBottomWidth: 0.5,
    backgroundColor: COLORS.Transparent,
    // borderColor: CUSTOM_COLOR.Black,
    borderRadius: 20,
    borderBottomLeftRadius: 60,
    borderBottomRightRadius: 60,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingLeft: 28,
    flexDirection: 'row',
  },
  Underline: {
    borderColor: COLORS.Transparent,
  },
  borderRadio: {
    height: 24,
    width: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: COLORS.SunsetOrange,
    alignItems: 'center',
    justifyContent: 'center',
  },
  borderNoPress: {
    height: 24,
    width: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: COLORS.Silver,
    alignItems: 'center',
    justifyContent: 'center',
  },
  doorDelivery: {
    fontSize: 17,
    fontFamily: FONT_FAMILY.TextRegular,
    color: COLORS.Black,
    marginLeft: 15,
  },
  radio: {
    height: 12,
    width: 12,
    borderRadius: 6,
    backgroundColor: COLORS.SunsetOrange,
  },
  rectangle: {
    width: Dimensions.get('window').width * 0.12,
    height: Dimensions.get('window').width * 0.12,
    backgroundColor: COLORS.Tahiti_Gold,
    marginLeft: 15,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rectangleColor: {
    backgroundColor: COLORS.French_Rose,
  },
  flex: {
    flex: 1,
  },
  TextBox: {
    borderBottomWidth: 0.5,
    backgroundColor: COLORS.Transparent,
    borderColor: COLORS.Black,
    borderRadius: 20,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingLeft: 30,
    flexDirection: 'row',
  },
  addressText1: {
    fontSize: 17,
    // fontWeight: 400,
    fontFamily: FONT_FAMILY.TextBold,
    color: COLORS.Black,
  },
  addressText2: {
    fontSize: 15,
    // fontWeight: 400,
    fontFamily: FONT_FAMILY.TextRegular,
    color: COLORS.Black,
  },

  modalBackground: {
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0, 0.5)',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    justifyContent: 'center',
  },
  modalContainer: {
    width: Dimensions.get('window').width - 100,
    alignSelf: 'center',
    backgroundColor: COLORS.White,
    borderRadius: 30,
  },
  modalHeader: {
    backgroundColor: COLORS.Gallery,
    color: COLORS.Black,
    paddingVertical: 18,
    paddingLeft: 45,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    fontSize: 20,
    fontFamily: FONT_FAMILY.PoppinsMedium,
  },
  noteContainer: {
    marginHorizontal: 46,
  },
  noteItem: {
    marginVertical: 18,
  },
  noteTitle: {
    textTransform: 'uppercase',
    color: COLORS.Black,
    opacity: 0.5,
    fontSize: 15,
    marginBottom: 5,
  },
  noteNumber: {
    color: COLORS.Black,
    fontSize: 17,
  },
  footer: {
    marginLeft: 46,
    marginRight: 18,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  footerCancel: {
    fontFamily: FONT_FAMILY.PoppinsSemiBold,
    fontSize: 17,
    color: COLORS.Black,
    opacity: 0.5,
  },
  footerProceed: {
    width: 160,
  },
});

export default styles;
