import { Box, Divider, Grid, Typography } from "@material-ui/core";
import { Earth, Facebook, Linkedin, MapMarker, Twitter } from "mdi-material-ui";
import OrganizationLogo from "components/OrganizationLogo";
import Bold from "components/Bold";
import getFocusSdgs from "helpers/getFocusSdgs";

const OrganizationSideView = ({ organization }) => {
  const {
    name,
    summary,
    url,
    address,
    twitter_handle,
    facebook_handle,
    linkedin_handle,
  } = organization;
  const focusSdgs = getFocusSdgs(organization);

  return (
    <>
      <Box padding={2} bgcolor="#202029" color="white">
        <OrganizationLogo size={100} organization={organization} />
        <Box marginTop={2}>
          <Typography variant="body1">
            <Bold fontSize="h3.fontSize">{name}</Bold>
          </Typography>
        </Box>
      </Box>

      <Divider />
      <Box padding={2}>
        <Box display="flex">
          <Box marginRight={1}>
            <Earth />
          </Box>
          <Typography variant="body1">
            <a href={url} target="_blank">
              {url}
            </a>
          </Typography>
        </Box>
        {address && (
          <Box display="flex">
            <Box marginRight={1}>
              <MapMarker />
            </Box>
            <Typography variant="body1">{address}</Typography>
          </Box>
        )}
      </Box>
      {summary && (
        <>
          <Divider />
          <Box padding={2} paddingBottom={3}>
            <Typography variant="h4" gutterBottom>
              <Bold>About</Bold>
            </Typography>
            <Typography variant="body1">{summary}</Typography>
          </Box>
        </>
      )}
      <Divider />
      <Box padding={2} paddingBottom={3}>
        <Typography variant="h4" gutterBottom>
          <Bold>Focus SDGs</Bold>
        </Typography>
        <Grid container spacing={1}>
          {Array.from({ length: 17 }).map((_e, index) => (
            <Grid key={index + 1} item>
              <img
                src={`/static/sdgs/sdg${index + 1}.jpg`}
                style={{
                  height: 60,
                  filter: focusSdgs.includes(index + 1) ? null : "grayscale(1)",
                  opacity: focusSdgs.includes(index + 1) ? 1 : 0.5,
                }}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
      {(twitter_handle || facebook_handle || linkedin_handle) && (
        <>
          <Divider />
          <Box padding={2} paddingBottom={3}>
            <Typography variant="h4" gutterBottom>
              <Bold>Social Media</Bold>
            </Typography>
            <Box marginY={1}>
              {facebook_handle && (
                <Box display="flex">
                  <Box marginRight={1}>
                    <Facebook />
                  </Box>
                  <Typography variant="body1">
                    <a
                      href={`https://www.facebook.com/${facebook_handle}/`}
                      target="_blank"
                    >
                      @{facebook_handle}
                    </a>
                  </Typography>
                </Box>
              )}
              {twitter_handle && (
                <Box display="flex">
                  <Box marginRight={1}>
                    <Twitter />
                  </Box>
                  <Typography variant="body1">
                    <a
                      href={`https://twitter.com/${twitter_handle}`}
                      target="_blank"
                    >
                      @{twitter_handle}
                    </a>
                  </Typography>
                </Box>
              )}
              {linkedin_handle && (
                <Box display="flex">
                  <Box marginRight={1}>
                    <Linkedin />
                  </Box>
                  <Typography variant="body1">
                    <a
                      href={`https://www.linkedin.com/company/${linkedin_handle}/`}
                      target="_blank"
                    >
                      @{linkedin_handle}
                    </a>
                  </Typography>
                </Box>
              )}
            </Box>
          </Box>
        </>
      )}
    </>
  );
};

export default OrganizationSideView;
