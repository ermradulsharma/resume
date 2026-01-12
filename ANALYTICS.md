# Google Analytics 4 (GA4) Integration

This project uses `react-ga4` to track page views and granular user interactions. The setup is designed to be privacy-conscious and developer-friendly, with specific behaviors for Development vs. Production environments.

## Configuration

**Measurement ID**: `G-NMCW7EH7M0`
**Utility File**: `src/utils/analytics/ga.js`

### Environment Behavior

| Environment     | Behavior                                                                               |
| :-------------- | :------------------------------------------------------------------------------------- |
| **Production**  | Events are automatically sent to Google Analytics.                                     |
| **Development** | By default, analytics are **disabled**. Events are logged to the browser console only. |

### Debug Mode (Development)

To verify GA tracking in development without deploying, you can enable "Debug Mode". This sends real events to GA and logs them to the console.

1.  Create or edit `.env` in the project root.
2.  Add: `REACT_APP_ENABLE_GA_DEBUG=true`
3.  Restart dev server: `npm start`
4.  GA will initialize with `debug: true`.

---

## Tracking Implementation

### 1. Page Views

Automatically tracked on every route change via `App.jsx`.

### 2. Custom Events

We track specific high-value user interactions. All events include a `value: 1` metric to allow for quantitative goal tracking in GA4.

#### Global / Common

| Interaction           | Event Action        | Category     | Label             | Value |
| :-------------------- | :------------------ | :----------- | :---------------- | :---- |
| **Social Link Click** | `click_social_link` | `Engagement` | `[Platform Name]` | `1`   |

#### Contact Page

| Interaction    | Event Action         | Category  | Label      | Value |
| :------------- | :------------------- | :-------- | :--------- | :---- |
| **Phone Link** | `click_contact_link` | `Contact` | `phone`    | `1`   |
| **Email Link** | `click_contact_link` | `Contact` | `email`    | `1`   |
| **WhatsApp**   | `click_contact_link` | `Contact` | `whatsapp` | `1`   |

#### Projects / Portfolio

| Interaction         | Event Action      | Category   | Label             | Value |
| :------------------ | :---------------- | :--------- | :---------------- | :---- |
| **Filter Project**  | `filter_projects` | `Projects` | `[Tech Name]`     | -     |
| **View Case Study** | `view_case_study` | `Projects` | `[Project Title]` | -     |

#### Blogs

| Interaction         | Event Action   | Category     | Label          | Value |
| :------------------ | :------------- | :----------- | :------------- | :---- |
| **Filter Category** | `filter_blogs` | `Engagement` | `[Category]`   | `1`   |
| **Read Article**    | `view_blog`    | `Blogs`      | `[Blog Title]` | `1`   |

#### Services

| Interaction    | Event Action          | Category   | Label            | Value |
| :------------- | :-------------------- | :--------- | :--------------- | :---- |
| **View Modal** | `view_service_detail` | `Services` | `[Service Name]` | `1`   |

#### About / Resume

| Interaction         | Event Action      | Category     | Label          | Value |
| :------------------ | :---------------- | :----------- | :------------- | :---- |
| **Download Resume** | `download_resume` | `Engagement` | `PDF Download` | -     |

---

## Developer Usage

To track a new event, import the helper utility:

```javascript
import { trackEvent } from "../../utils/analytics/ga";

// usage
trackEvent({
  action: "button_click_name", // Required: Snake case action name
  category: "CategoryName", // Required: Grouping category
  label: "Specific Label", // Optional: Specific item detail
  value: 1, // Optional: Numeric value (usually 1)
});
```
