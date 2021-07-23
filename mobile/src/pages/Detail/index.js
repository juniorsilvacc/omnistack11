import React from 'react';
import {Feather} from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { View, Text, Image, TouchableOpacity, Linking } from 'react-native';

import *  as MailComposer from 'expo-mail-composer';

import logoImg from '../../assets/logo.png';
import styles from './styles';

export default function index() {

  const navigation = useNavigation();
  const route = useRoute();

  const incident = route.params.incident;
  const message = `Olá ${incident.name}, estou entrando em contato pois gostaria de ajudar no caso "${incident.title}" com o valor de ${Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(incident.value)}`;

  function navigateBack(){
    navigation.goBack();
  }

  function sendMail(){
    MailComposer.composeAsync({
      subject: `Herói do caso: ${incident.title}`,
      recipients: [incident.email],
      body: message,
    });
  }

  function sendWhasApp(){
    Linking.openURL(`whatsapp://send?phone=55${incident.whatsapp}&text=${message}`);
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity 
          onPress={navigateBack}
        >
          <Feather name="arrow-left" size={30} color="#E02041" />
        </TouchableOpacity>

        <Image source={logoImg}/>
      </View>

      <View style={styles.incidentList}>
        <View style={styles.incident}>
          <View style={styles.incidentPropertyValue}>
            <View>
              <Text style={styles.incidentProperty}>CASO:</Text>
              <Text style={styles.incidentValue}>{incident.title}</Text>
            </View>
            <View style={styles.ongTitleText}>
              <Text style={styles.incidentProperty}>ONG:</Text>
              <Text style={styles.incidentValue}>{incident.name}</Text>
            </View>
          </View>

          <View>
            <Text style={styles.incidentProperty}>DESCRIÇÃO:</Text>
            <Text style={styles.incidentValue}>{incident.description}</Text>

            <Text style={styles.incidentProperty}>LOCALIZAÇÃO:</Text>
            <Text style={styles.incidentValue}>{incident.city}/{incident.uf}</Text>

            <Text style={styles.incidentProperty}>VALOR:</Text>
            <Text style={[styles.incidentValue, {marginBottom: 0}]}>{Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL'
                }).format(incident.value)}</Text>
          </View>
        </View>
      </View>

      <View style={styles.incident}>
        <Text style={styles.contactTitle}>Salve o dia!</Text>
        <Text style={styles.contactTitle}>Seja o herói desse caso.</Text>

        <Text style={styles.contactText}>Entre em contato:</Text>

        <View style={styles.actions}>
          <TouchableOpacity style={styles.action} onPress={sendWhasApp}>
            <Text style={styles.actionText}>WhatsApp</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.action} onPress={sendMail}>
            <Text style={styles.actionText}>E-mail</Text>
          </TouchableOpacity>
        </View>
      </View>


    </View>
  )
}
