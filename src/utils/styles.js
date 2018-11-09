import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#2196f3',
    //   justifyContent: 'center',
      alignItems: 'center',
      fontFamily: 'product_sans',
  
    },
    main: {
        marginTop: 60,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
    form: {
        flex: 3,
        alignItems: "center",
        width: '100%',
        fontFamily: 'product_sans',
        marginVertical: 80

    },
    input: {
        backgroundColor: 'rgba(255,255,255, 1)',
        width: 260,
        paddingHorizontal: 25,
        borderRadius: 30,
        marginVertical: 10,
        fontFamily: 'product_sans',
        fontSize: 14
    },
    textBoxField: {
        fontFamily: 'product_sans',
        fontSize: 16
    },
    text: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '500',
        fontFamily: 'product_sans',
    },
    label: {
        color: '#fff',
        fontSize: 14,
        fontWeight: '500',
        fontFamily: 'product_sans',
    },
    button: {
        width: 260,
        borderRadius: 30,
        backgroundColor: '#1566b7',
        // backgroundColor: '#064579',
        marginTop: 50,
        alignItems: 'center',
        paddingVertical: 15,
        borderWidth: 1,
        borderColor: '#1565c0',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.34,
        shadowRadius: 2,
        elevation: 1,
    }
    
  
  });