"use client";

import { Form } from "@/ui/form/form";
import { FormSkeleton } from "@/ui/form/form/form-skeleton";
import { useState } from "react";
import {
  AGERANGES,
  calculatePremiumSchema,
  EMPLOYMENTTYPE,
  INDUSTRIES,
  PROVINCES,
  SALARYRANGES,
} from "./calculate-premium-schema";
import {
  FormActionRow,
  FormDivider,
  FormSection,
  FormSectionCol,
} from "@/ui/form/layout";
import { Select, SelectItem } from "@/ui/form/select";
import { Button } from "@/ui/button";
import { Modal, ModalContent, ModalTitle } from "@/ui/overlay/modal";

export function CalculatePremiumForm() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [age, setAge] = useState<number | null>(null);
  const [premiumModal, setPremiumModal] = useState<boolean>(false);

  if (isLoading) {
    return <FormSkeleton />;
  }

  return (
    <div>
    <Form
      schema={calculatePremiumSchema}
      onSubmit={(values) => {
        console.log(values)
        setPremiumModal(true)
      }}
    >
      <FormSection
        title="Personal Information"
        description="Some description explaining why this info is needed."
      >
        <FormSectionCol colSpan={3}>
          <Select
            isRequired
            label="Age"
            id="age"
            name="age"
            items={AGERANGES}
            onSelectionChange={(key) => setAge(Number(key))}
          >
            {(item) => <SelectItem>{item.name}</SelectItem>}
          </Select>
        </FormSectionCol>

        <FormSectionCol colSpan={3}>
          <Select
            isRequired
            label="Province"
            id="province"
            name="province"
            items={PROVINCES}
          >
            {(item) => <SelectItem>{item.name}</SelectItem>}
          </Select>
        </FormSectionCol>
      </FormSection>
      <FormDivider />
      <FormSection
        title="Job Information"
        description="Something about why this info is important"
      >
        {" "}
        <FormSectionCol colSpan={2}>
          <Select
            isRequired
            label="Employment Type"
            id="employmenttype"
            name="employmenttype"
            items={EMPLOYMENTTYPE}
          >
            {(item) => <SelectItem>{item.name}</SelectItem>}
          </Select>
        </FormSectionCol>
        <FormSectionCol colSpan={2}>
          <Select
            isRequired
            label="Salary"
            id="salary"
            name="salary"
            placeholder={!age ? "Please select age to enable salary ranges": "Select an item"}
            items={SALARYRANGES.find((x) => x.age === age)?.salary}
            isDisabled={!age}
          >
            {(item) => <SelectItem>{item.name}</SelectItem>}
          </Select>
        </FormSectionCol>
        <FormSectionCol colSpan={2}>
          <Select
            isRequired
            label="Industry"
            id="industry"
            name="industry"
            items={INDUSTRIES}
          >
            {(item) => <SelectItem>{item.name}</SelectItem>}
          </Select>
        </FormSectionCol>
      </FormSection>
      <FormActionRow>
        <Button type="submit">Calculate</Button>
      </FormActionRow>
    </Form>
    <Modal isOpen={premiumModal}>
      <ModalTitle>Your Premium</ModalTitle>
      <ModalContent>Calculation of the premium</ModalContent>
    </Modal>
    </div>
  );
}
