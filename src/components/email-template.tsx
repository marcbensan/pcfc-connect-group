import {
  Body,
  Column,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Row,
  Section,
  Text,
} from "@react-email/components";

interface EmailType {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  message?: string;
}

export default function EmailTemplate({
  user,
  leader,
}: {
  user: EmailType;
  leader: string;
}) {
  const { firstName, lastName, phone, email, message } = user;
  return (
    <Html>
      <Head />
      <Body style={main}>
        <Preview>A Connect Group Sign Up is requested</Preview>
        <Container>
          <Section style={content}>
            <Row>
              <img
                style={image}
                width={620}
                src="https://img.freepik.com/free-vector/monitor-computer-with-electronic-business_24911-45471.jpg?t=st=1743469824~exp=1743473424~hmac=7bf2649fa8f7be9025e4abba513a462f5edaec563612ec51b1752a4502c6244e&w=996"
                alt="email-header-img"
              />
            </Row>

            <Row style={{ ...boxInfos, paddingBottom: "0" }}>
              <Column>
                <Heading
                  style={{
                    fontSize: 32,
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  Hello,
                </Heading>
                <Heading
                  as="h2"
                  style={{
                    fontSize: 26,
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  Someone requested to join a group
                </Heading>

                <Text style={paragraph}>
                  <b>Name: </b>
                  {firstName} {lastName}
                </Text>
                <Text style={paragraph}>
                  <b>Selected Leader: </b>
                  {leader}
                </Text>
                <Text style={{ ...paragraph, marginTop: -5 }}>
                  <b>Phone: </b>
                  {phone}
                </Text>
                <Text style={{ ...paragraph, marginTop: -5 }}>
                  <b>Email: </b>
                  {email}
                </Text>

                {message && (
                  <>
                    <Text
                      style={{
                        color: "rgb(0,0,0, 0.5)",
                        fontSize: 14,
                        marginTop: -5,
                      }}
                    >
                      Additional Information:
                    </Text>
                    <Text style={{ ...paragraph, marginTop: -5 }}>
                      <b>Optional Message: </b>
                      {message}
                    </Text>
                  </>
                )}

                <Text style={{ ...paragraph, marginTop: -5 }}>
                  For any inquiries, feel free to reach out to
                  marc.bensan7@gmail.com
                </Text>
                <Text style={{ ...paragraph, marginTop: -5 }}>
                  All the best,
                </Text>
                <Text style={{ ...paragraph, marginTop: -5 }}>Marc</Text>
              </Column>
            </Row>
          </Section>
          <Text
            style={{
              textAlign: "center",
              fontSize: 12,
              color: "rgb(0,0,0, 0.7)",
            }}
          >
            © 2025 | PCFC, 781 Warden Avenue, Toronto, ON, Canada | Marc Bensan
          </Text>
        </Container>
      </Body>
    </Html>
  );
}

const main = {
  backgroundColor: "#fff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const paragraph = {
  fontSize: 16,
};

const content = {
  border: "1px solid rgb(0,0,0, 0.1)",
  borderRadius: "3px",
  overflow: "hidden",
};

const image = {
  maxWidth: "100%",
};

const boxInfos = {
  padding: "20px",
};
