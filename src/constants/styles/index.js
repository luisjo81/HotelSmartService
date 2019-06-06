import {
    StyleSheet
} from 'react-native';
import colors from '../../constants/colors';

//Styles const sheet
const styles = StyleSheet.create({
    //Contact Screen
    contactScreenBackground: {
        flex: 1,
        height: '100%',
        width: '100%'
    },
    contactScreenCardFooter: {
        borderBottomLeftRadius: 1,
        borderBottomRightRadius: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingBottom: 40,
        paddingHorizontal: 16,
        paddingTop: 12.5
    },
    contactScreenCardImage: {
        alignSelf: 'center',
        height: 80,
        width: 80,
        marginHorizontal: 10
    },
    contactScreenList: {
    },
    contactScreenListContainer: {
        marginTop: 50
    },
    contactScreenListInfoText: {
        color: colors.black,
        flex: 1,
        fontFamily: 'Chalkduster',
        fontSize: 20,
        textAlign: 'justify',
        alignItems: 'center'
    },
    contactScreenMainContainer: {
        flex: 1,
        marginTop: 50
    },
    //Home Screen
    homeScreenBackground: {
        flex: 1,
        height: '100%',
        width: '100%'
    },
    homeScreenCard: {
        flexBasis: '48%',
        marginHorizontal: 2,
        marginVertical: 2
    },
    homeScreenCardContent: {
        paddingHorizontal: 16,
        paddingVertical: 12.5
    },
    homeScreenCardFooter: {
        borderBottomLeftRadius: 1,
        borderBottomRightRadius: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingBottom: 25,
        paddingHorizontal: 16,
        paddingTop: 12.5
    },
    homeScreenCardHeader: {
        alignItems: "center",
        borderTopLeftRadius: 1,
        borderTopRightRadius: 1,
        flexDirection: 'row',
        justifyContent: "center",
        paddingHorizontal: 16,
        paddingVertical: 17
    },
    homeScreenCardImage: {
        alignSelf: 'center',
        height: 90,
        width: 90
    },
    homeScreenList: {
    },
    homeScreenListContainer: {
        //alignItems: 'center'
    },
    homeScreenListInfoText: {
        color: colors.black,
        flex: 1,
        fontFamily: 'Chalkduster',
        fontSize: 14,
        textAlign: 'justify'
    },
    homeScreenListTitleText: {
        color: colors.black,
        flex: 1,
        fontFamily: 'Chalkduster',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    homeScreenMainContainer: {
        flex: 1,
        marginTop: 20
    },
    //Information Screen
    informationScreenBackground: {
        flex: 1,
        height: '100%',
        width: '100%'
    },
    informationScreenCard: {
        flexBasis: '48%',
        marginHorizontal: 2,
        marginVertical: 2
    },
    informationScreenCardContent: {
        paddingHorizontal: 16,
        paddingVertical: 12.5
    },
    informationScreenCardFooter: {
        borderBottomLeftRadius: 1,
        borderBottomRightRadius: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingBottom: 25,
        paddingHorizontal: 16,
        paddingTop: 12.5
    },
    informationScreenCardHeader: {
        alignItems: "center",
        borderTopLeftRadius: 1,
        borderTopRightRadius: 1,
        flexDirection: 'row',
        justifyContent: "center",
        paddingHorizontal: 16,
        paddingVertical: 17
    },
    informationScreenCardImage: {
        alignSelf: 'center',
        height: 120,
        width: 120
    },
    informationScreenList: {
    },
    informationScreenListContainer: {
        //alignItems: 'center'
    },
    informationScreenListTitleText: {
        color: colors.black,
        flex: 1,
        fontFamily: 'Chalkduster',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    informationScreenMainContainer: {
        flex: 1,
        marginTop: 20
    },
    //Language Screen
    languageScreenBackground: {
        flex: 1,
        height: '100%',
        width: '100%'
    },
    languageScreenCard: {
        flexBasis: '48%',
        marginHorizontal: 2,
        marginVertical: 2
    },
    languageScreenCardContent: {
        paddingHorizontal: 16,
        paddingVertical: 12.5
    },
    languageScreenCardHeader: {
        alignItems: "center",
        borderTopLeftRadius: 1,
        borderTopRightRadius: 1,
        flexDirection: 'row',
        justifyContent: "center",
        paddingHorizontal: 16,
        paddingVertical: 10
    },
    languageScreenCardImage: {
        alignSelf: 'center',
        height: 90,
        width: 90
    },
    languageScreenListTitleText: {
        color: colors.black,
        flex: 1,
        fontFamily: 'Chalkduster',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    languageScreenMainContainer: {
        flex: 1,
        marginBottom: 180,
        marginHorizontal: 35,
        marginTop: 5,
    },
    languageScreenTitleText: {
        color: colors.black,
        flex: 1,
        marginTop: 30,
        fontFamily: 'Verdana',
        fontSize: 40,
        fontWeight: 'bold',
        height: '10%',
        textAlign: 'center',
        width: '100%'
    },
    //Generic Info Screen
    genericInfoScreenBackground: {
        flex: 1,
        height: '100%',
        width: '100%'
    },
    genericInfoScreenCardImage: {
        alignSelf: 'center',
        height: 400,
        marginHorizontal: 2,
        marginTop: 1,
        width: 300
    },
    genericInfoScreenList: {
        height: 10,
        paddingBottom: '50%'
    },
    genericInfoScreenListContainer: {
        alignItems: 'center'
    },
    genericInfoScreenMainContainer: {
        flex: 1,
        marginTop: 5
    },
    genericInfoScreenOptionContainer: {
        height: '70%'
    },
    genericInfoScreenText: {
        color: colors.black,
        flex: 1,
        fontFamily: 'Chalkduster',
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 42,
        textAlign: 'justify'
    },
    //Login Screen
    loginScreenBackground: {
        flex: 1,
        height: '100%',
        width: '100%'
    },
    loginScreenBackContainer: {
        padding: 20
    },
    loginScreenButtonContainer: {
        backgroundColor: colors.blue1,
        padding: 15
    },
    loginScreenButtonText: {
        color: colors.black,
        fontSize: 20,
        textAlign: 'center'
    },
    loginScreenFormContainer: {
        flex: 1
    },
    loginScreenInputContainer: {
        backgroundColor: colors.transparentAqua,
        height: 40,
        marginBottom: 10,
        paddingHorizontal: 10
    },
    loginScreenMainContainer: {
        flex: 1
    },
    loginScreenSigninLinkText: {
        color: colors.Black,
        fontSize: 15,
        textAlign: 'center',
        textDecorationLine: 'underline'
    },
    loginScreenTitleText: {
        color: colors.blue1,
        flex: 1,
        marginTop: 50,
        fontFamily: 'Chalkduster',
        fontSize: 60,
        fontWeight: 'bold',
        height: '10%',
        textAlign: 'center',
        width: '100%'
    },
    //Social Media Screen
    socialMediaScreenBackground: {
        flex: 1,
        height: '100%',
        width: '100%'
    },
    socialMediaScreenCard: {
        flexBasis: '48%',
        marginHorizontal: 10,
        marginVertical: 2
    },
    socialMediaScreenCardContent: {
        paddingHorizontal: 50,
        paddingVertical: 12.5
    },
    socialMediaScreenCardImage: {
        alignSelf: 'center',
        height: 90,
        width: 90
    },
    socialMediaScreenMainContainer: {
        flex: 1,
        marginBottom: 100,
        marginHorizontal: 50,
        marginTop: 5,
    },
    socialMediaScreenTitleText: {
        color: colors.black,
        flex: 1,
        marginTop: 30,
        fontFamily: 'Verdana',
        fontSize: 40,
        fontWeight: 'bold',
        height: '10%',
        textAlign: 'center',
        width: '100%'
    },
})

export default styles;