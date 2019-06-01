import {
    StyleSheet
} from 'react-native';
import colors from '../../constants/colors';

//Styles const sheet
const styles = StyleSheet.create({
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
})

export default styles;